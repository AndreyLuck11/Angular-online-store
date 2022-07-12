import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import {PaginatorModule} from "primeng/paginator";
import {ProductModule} from "../shared/product/product.module";


@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    PaginatorModule,
    ProductModule
  ]
})
export class CartPageModule { }
