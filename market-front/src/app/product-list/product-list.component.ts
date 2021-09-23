import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductInterFace} from "../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public products : ProductInterFace[];

  constructor() { }

  ngOnInit() {

  }

}
