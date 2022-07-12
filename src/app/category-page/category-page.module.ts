import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageRoutingModule } from './category-page-routing.module';
import {CategoryPageComponent} from "./category-page.component";
import {PaginatorModule} from "primeng/paginator";
import {ProductModule} from "../shared/product/product.module";


@NgModule({
  declarations: [CategoryPageComponent],
  imports: [
    CommonModule,
    CategoryPageRoutingModule,
    PaginatorModule,
    ProductModule,
  ]
})
export class CategoryPageModule { }
