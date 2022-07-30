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
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  url = environment.apiURL;
  longOrders: LongOrder[];
  longOrder: LongOrder;
  cartR: boolean = false;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.longOrders = this.cartService.longOrders$.value;
    this.cartService.longOrders$.subscribe((longOrder: LongOrder[]) => {
      longOrder.forEach((order) => {
        if (order.product.id === this.product.id) {
          this.longOrder = order;
          this.cartR = true;
        }
      })
    })
    // this.cartService.longOrders$.value.forEach((order) => {
    //   if (order.product.id === this.product.id) {
    //     this.longOrder = order;
    //     this.cartR = true;
    //   }
    // })
  }

  public addToCart(productId: number) {
    this.cartService.pushToCart({ productId, count: 1 });
  }
}
