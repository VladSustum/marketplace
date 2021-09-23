import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from "../model/shoppingcart.model";

@Component({
  selector: 'tr[app-shopppingcart-list-item]',
  templateUrl: './shopppingcart-list-item.component.html',
  styleUrls: ['./shopppingcart-list-item.component.css']
})
export class ShopppingcartListItemComponent implements OnInit {

  @Input()
  public shopCart : ShoppingCart;

  constructor() {

  }

  ngOnInit(): void {
  }

}
