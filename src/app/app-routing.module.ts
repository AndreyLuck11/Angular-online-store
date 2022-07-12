import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {HomePageComponent} from "./home-page/home-page.component";

// const routes: Routes = [
//   {path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)}
// ];

const routes: Routes = [{
  path: '', component: NavbarComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'category', loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule)},
    {path: 'product', loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)},
    {path: 'cart', loadChildren: () => import('./cart-page/cart-page.module').then(m => m.CartPageModule)}
    // {path: 'category/:category', component: CategoryPageComponent },
    // {path: 'product/:id', component: ProductPageComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
