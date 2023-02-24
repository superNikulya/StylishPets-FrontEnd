import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Order} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) {}
  orders: Order[] =[]
  Orders = new BehaviorSubject<Order[]>(this.orders)

}
