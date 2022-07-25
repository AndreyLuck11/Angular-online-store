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

  ngOnInit(): void {}

  delete(id: number) {
    this.cart.deleteProduct(id);
  }
}
