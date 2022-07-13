import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {PaginatorModule} from "primeng/paginator";
import {ProductModule} from "../shared/product/product.module";
import {HomePageComponent} from "./home-page.component";


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    PaginatorModule,
    ProductModule,
  ]
})
export class HomePageModule { }
