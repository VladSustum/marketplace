import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPagesComponent} from "./pages/product-pages/product-pages.component";
import {ShopcartPageComponent} from "./pages/shopcart-page/shopcart-page.component";

const routes: Routes = [
  { path: 'products', component: ProductPagesComponent},
  { path: 'shopingCart', component: ShopcartPageComponent},
  {  path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
