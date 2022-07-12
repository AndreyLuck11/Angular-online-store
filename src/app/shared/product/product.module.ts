import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    CardModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
