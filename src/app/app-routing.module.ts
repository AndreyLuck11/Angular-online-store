import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart-page/cart-page.module').then((m) => m.CartPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
