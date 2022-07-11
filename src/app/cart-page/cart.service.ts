import { Injectable } from '@angular/core';
import {Product} from "../shared/interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  data: string | null
  dataErr: [Object]

  pushToCart(product: Product) {
    this.data = localStorage.getItem('cart');
      if (this.data === null) {
        this.data = JSON.stringify(product);
        this.data = '[' + this.data + ']'
        localStorage.setItem('cart', this.data);
        this.data = localStorage.getItem('cart');
      } else {
        this.dataErr = JSON.parse(this.data);
        this.dataErr.push(product);
        this.data = JSON.stringify(this.dataErr);
        localStorage.setItem('cart', this.data);
      }
  }

  getProducts() {
    console.log(this.data)
    if (typeof this.data === "string") {
      console.log(JSON.parse(this.data));
    }
  }
}
