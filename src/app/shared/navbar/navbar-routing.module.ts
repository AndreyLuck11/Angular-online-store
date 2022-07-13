import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar.component";

const routes: Routes = [{
  path: '', component: NavbarComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', loadChildren: () => import('../../home-page/home-page.module').then(m => m.HomePageModule)},
    {path: 'category', loadChildren: () => import('../../category-page/category-page.module').then(m => m.CategoryPageModule)},
    {path: 'product', loadChildren: () => import('../../product-page/product-page.module').then(m => m.ProductPageModule)},
    {path: 'cart', loadChildren: () => import('../../cart-page/cart-page.module').then(m => m.CartPageModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
