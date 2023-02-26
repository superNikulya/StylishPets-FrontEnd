import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Order} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cartCondition = false;

  constructor(
    private http: HttpClient
  ) {}

  orders: Order[] =[];
  Orders = new BehaviorSubject<Order[]>(this.orders);


  cartOpenClose(){
    this.cartCondition =!this.cartCondition;
  }
}
