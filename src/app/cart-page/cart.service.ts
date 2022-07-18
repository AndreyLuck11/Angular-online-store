import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../shared/interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );

  constructor() {
    // сетать айдишники продуктов
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.products$.next(JSON.parse(data));
    }
    this.products$.subscribe((products: Product[]) =>
      localStorage.setItem('cart', JSON.stringify(products))
    );
  }

  public pushToCart(product: Product) {
    this.products$.next([...this.products$.value, product]);
  }

  public deleteProduct(id: number) {
    this.products$.next([
      ...this.products$.value.filter((product) => product.id !== id),
    ]);
  }
}
