import { Component, OnInit } from '@angular/core';
import {OrderService} from "../shared/services/order.service";
import {Order} from "../shared/services/interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orders: Order[] =[];
  condition = false;
  //@ts-ignore
  quantityForm: FormGroup;
  constructor(
    public orderService: OrderService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.quantityForm = this.fb.group({
      quantity: [1, [Validators.max(100),Validators.min(1)]]
    });


    this.orderService.Orders.subscribe(orders=>{
      this.orders = orders;
    }
    );
  }
  quantity(value: string, order: Order){
    if(value==="-"){
      order.quantity--;
    }
    else if(value==="+"){
      order.quantity++;
    }
  }
}
