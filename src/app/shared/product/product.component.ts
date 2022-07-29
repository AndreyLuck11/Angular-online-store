import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from '../interface';
import { CartService } from '../../cart-page/cart.service';
import {environment} from "../../../environments/environment";
import {LongOrder} from "../interfaces/order.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  url = environment.apiURL;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  public addToCart(productId: number) {
    this.cartService.pushToCart({ productId, count: 1 });
  }
}
