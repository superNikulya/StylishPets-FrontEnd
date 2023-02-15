import { Component, OnInit } from '@angular/core';
import {OrderService} from "../shared/services/order.service";
import {Order} from "../shared/services/interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orders: Order[] =[]
  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getItems()
  }
  changeQuantity(condition: 'plus'| 'minus', order: Order){
    if(condition === "minus"){
      order.quantity--
    }else{
      (condition === "plus")
      order.quantity++
    }
  }
  getItems(){
    this.orders = this.orderService.orders;
    console.log(this.orders)
  }

}
