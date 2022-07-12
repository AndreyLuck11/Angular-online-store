import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import {PaginatorModule} from "primeng/paginator";
import {ProductModule} from "../shared/product/product.module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    PaginatorModule,
    ProductModule,
    TableModule,
    ButtonModule,
    RippleModule
  ]
})
export class CartPageModule { }
