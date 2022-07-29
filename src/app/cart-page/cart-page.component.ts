import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../shared/interface';
import { BehaviorSubject } from 'rxjs';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
  url = environment.apiURL;

  delete(id: number) {
    this.cartService.deleteProduct(id);
  }
}
