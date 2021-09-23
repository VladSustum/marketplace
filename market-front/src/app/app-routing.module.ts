import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPagesComponent} from "./pages/product-pages/product-pages.component";
import {ShopcartPageComponent} from "./pages/shopcart-page/shopcart-page.component";
import { TestPageComponent } from './test-page/test-page.component';
<<<<<<< HEAD
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
=======
>>>>>>> d09dd24ec50bc812d7fb676a5e346c8e48427be1

const routes: Routes = [
  { path: 'products', component: ProductPagesComponent},
  { path: 'shopingCart', component: ShopcartPageComponent},
  {path:'test-page',component:TestPageComponent},
<<<<<<< HEAD
  {  path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
=======
  {  path: '', redirectTo: 'products', pathMatch: 'full'}
>>>>>>> d09dd24ec50bc812d7fb676a5e346c8e48427be1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
