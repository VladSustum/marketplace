import { Component, OnInit } from '@angular/core';
import {ProductInterFace, Product} from "../../model/product.model";
import {ProductService} from "../../product.service";
import {CategoryService} from "../../category.service";
import {Category} from "../../model/category.model";

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css']
})
export class ProductPagesComponent implements OnInit {

  public categories : Category[];

  public products : ProductInterFace[];

  constructor(
    private productService: ProductService,
    private categoryService : CategoryService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    )
  }

  search(name: string){
    this.productService.searchProducts(name).subscribe((products : Product[]) =>
   this.products = products)
  }


loadData(){
this.productService.getProducts().subscribe(
  products => this.products = products
)
  this.getCategories();
}

}
