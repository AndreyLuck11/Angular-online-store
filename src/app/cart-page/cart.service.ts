import { Injectable } from '@angular/core';
import {BehaviorSubject, map, switchMap, tap} from 'rxjs';
import { Product } from '../shared/interface';
import {ProductService} from "../shared/product.service";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );
  public productsId$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    []
  );

  constructor(private productService: ProductService) {
    // сетать айдишники продуктов
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.productsId$.next(JSON.parse(data));
    }
    this.productsId$.subscribe((productsId: Number[]) =>
      localStorage.setItem('cart', JSON.stringify(productsId))
    );

    this.productsId$.subscribe((productsId: number[]) => {
      productsId.forEach((value) => {
        this.productService.getById(value).subscribe((product: Product) => {
          this.products$.next([...this.products$.value, product])
        })
      })
    })

  }

  public pushToCart(id: number ) {
    this.productsId$.next([...this.productsId$.value, id]);
  }

  public deleteProduct(id: number) {
    this.products$.next([
      ...this.products$.value.filter((product) => product.id !== id),
    ]);
  }
}



// .pipe(switchMap(({id}: Params) => {
//   return this.productService.getById(id);
// }), tap(response => {console.log(response)}));
