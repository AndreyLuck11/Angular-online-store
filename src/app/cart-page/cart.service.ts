import { Injectable } from '@angular/core';
import {
  BehaviorSubject, forkJoin,
  map,
  Observable, pipe,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from '../shared/interface';
import { ProductService } from '../shared/product.service';
import { Params } from '@angular/router';
import {LongOrder, Order} from '../shared/interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  public longOrders$: BehaviorSubject<LongOrder[]> = new BehaviorSubject<LongOrder[]>([]);

  public totalPrice$: Observable<number>;

  constructor(private productService: ProductService) {
    this.getDataFromLocalStorage();

    this.totalPrice$ = this.longOrders$.pipe(
      map(this.checkPrice()),
    );

    this.orders$.subscribe((orders: Order[]) => {
      localStorage.setItem('cart', JSON.stringify(orders));

      forkJoin(orders.map((order: Order) => this.productService.getById(order.productId).pipe(
        map((product: Product) => ({ product, count: order.count}))
      ))).subscribe((longOrders: LongOrder[]) => this.longOrders$.next(longOrders))
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

  public changeCount(productId: number, count: number) {
    const orders = this.orders$.value.map((order: Order) => {
      if (order.productId === productId) {
        order.count = count;
      }
      return order;
    });
    this.orders$.next(orders);
  }

  private getDataFromLocalStorage() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.orders$.next(JSON.parse(data));
    }
  }

  private checkPrice() {
    return (longOrders: LongOrder[]) => {
      let totalPrice = 0;
      longOrders.forEach(
        (longOrder: LongOrder) =>
          (totalPrice = totalPrice + Number(longOrder.product.price) * Number(longOrder.count))
      );
      return totalPrice;
    }
  }
}
