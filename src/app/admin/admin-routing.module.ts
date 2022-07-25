import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () =>
      import('./create-page/create-page.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./edit-page/edit-page.module').then((m) => m.EditPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
