import { Component, OnInit } from '@angular/core';
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


  ngOnInit(): void {
    this.products = this.cart.getProducts()
    console.log(this.products)
  }

}
