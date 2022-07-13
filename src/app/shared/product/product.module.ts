import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    CardModule,
    RippleModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
