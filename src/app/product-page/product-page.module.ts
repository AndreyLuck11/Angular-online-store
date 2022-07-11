import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ImageModule,
    ButtonModule,
    RippleModule
  ]
})
export class ProductPageModule { }
