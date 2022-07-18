import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../shared/interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent implements OnInit {
  constructor(public cart: CartService) {}

  totalPrice: number = 0;

  ngOnInit(): void {
    console.log(this.cart.products$.value);
    this.priceCalculation();
  }

  delete(id: number) {
    this.cart.deleteProduct(id);
    this.priceCalculation();
  }

  priceCalculation() {
    this.totalPrice = 0;
    for (let i = 0; i < this.cart.products$.value.length; i++) {
      this.totalPrice =
        this.totalPrice + Number(this.cart.products$.value[i].price);
    }
  }
}
