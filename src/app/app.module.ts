import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductComponent } from './shared/product/product.component';
import {MenubarModule} from "primeng/menubar";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
