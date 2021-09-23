import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListItemComponent,
    ProductListComponent,
    ProductPagesComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
