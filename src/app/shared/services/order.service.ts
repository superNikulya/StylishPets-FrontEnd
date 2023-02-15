import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Order} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor() {
    const ordersFromStorage = localStorage.getItem("orders");
    ordersFromStorage && this.orders$.next(JSON.parse(ordersFromStorage));

    this.orders$.subscribe((orders) => {
      localStorage.setItem("orders", JSON.stringify(orders));
    });
  }

  get orders() {
    return this.orders$.value;
  }

  addOrder(order: Order) {
    const orders = this.orders$.value;
    const orderToIncrease = orders.findIndex((item) => {
      return order._id === item._id && order.size === item.size;
    });
    if (orderToIncrease >= 0) {
      orders[orderToIncrease].quantity += order.quantity;
    }
    else {
      orders.push(order);
    }
    this.orders$.next(orders);
  }

}
