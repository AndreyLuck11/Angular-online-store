import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from "../interface";
import {CartService} from "../../cart-page/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

}
