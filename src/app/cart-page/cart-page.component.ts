import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {Product} from "../shared/interface";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(public cart: CartService) { }

  products: Product[]
  totalPrice: number = 0




  ngOnInit(): void {
    this.products = this.cart.getProducts();
    console.log(this.products);
    this.priceCalculation();
  }

  delete(id: number) {
    this.cart.deleteProduct(id);
    this.products = this.cart.getProducts();
    this.priceCalculation();
  }

  priceCalculation() {
    this.totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.totalPrice = this.totalPrice + Number(this.products[i].price);
    }
  }
}
