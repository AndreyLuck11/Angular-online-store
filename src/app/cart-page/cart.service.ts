import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from '../shared/interface';
import { ProductService } from '../shared/product.service';
import { Params } from '@angular/router';
import { Order } from '../shared/interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );
  public orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  public totalPrice$: Observable<number>;

  constructor(private productService: ProductService) {
    this.getDataFromLocalStorage();
    this.totalPrice$ = this.products$.pipe(
      map((products: Product[]) => {
        let totalPrice = 0;
        products.forEach(
          (product: Product) =>
            (totalPrice = totalPrice + Number(product.price))
        );
        return totalPrice;
      })
    );
    this.orders$.subscribe((orders: Order[]) => {
      localStorage.setItem('cart', JSON.stringify(orders));
      const newProducts$ = new BehaviorSubject<Product[]>([]);
      orders.forEach((order) => {
        this.productService
          .getById(order.productId)
          .subscribe((product: Product) => {
            newProducts$.next([...newProducts$.value, product]);
          });
      });
      newProducts$.subscribe((products: Product[]) => {
        if (products.length == orders.length) {
          this.products$.next(products);
        }
      });
    });
  }

  public pushToCart(pushedOrder: Order) {
    let hasOrder = false;
    const orders = this.orders$.value.map((order: Order) => {
      if (order.productId === pushedOrder.productId) {
        order.count++;
        hasOrder = true;
      }
      return order;
    });
    if (!hasOrder) {
      orders.push(pushedOrder);
    }
    this.orders$.next(orders);
  }

  public deleteProduct(productId: number) {
    this.orders$.next([
      ...this.orders$.value.filter(
        (order: Order) => order.productId !== productId
      ),
    ]);
  }

  private getDataFromLocalStorage() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.orders$.next(JSON.parse(data));
    }
  }
}
