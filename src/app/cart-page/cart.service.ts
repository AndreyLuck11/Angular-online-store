import { Injectable } from '@angular/core';
import {Product} from "../shared/interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  data: string | null
  dataArr: Product[]

  pushToCart(product: Product) {
    this.data = localStorage.getItem('cart');
      if (this.data === null) {
        this.data = JSON.stringify(product);
        this.data = '[' + this.data + ']'
        localStorage.setItem('cart', this.data);
        this.data = localStorage.getItem('cart');
      } else {
        this.dataArr = JSON.parse(this.data);
        this.dataArr.push(product);
        this.data = JSON.stringify(this.dataArr);
        localStorage.setItem('cart', this.data);
      }
  }

  getProducts() {
    this.data = localStorage.getItem('cart')

    if (this.data !== null) {
      return  JSON.parse(this.data)
    }
  }

  deleteProduct(id: number) {
    this.data = localStorage.getItem('cart');
    if (this.data !== null) {
      this.dataArr = JSON.parse(this.data);
      this.dataArr = this.dataArr.filter(product => product.id !== id)
      this.data = JSON.stringify(this.dataArr);
      localStorage.setItem('cart', this.data);
    }
  }
}
