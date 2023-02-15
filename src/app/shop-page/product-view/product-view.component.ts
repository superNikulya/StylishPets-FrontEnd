import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, of, Subscription, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import { Order, Product} from "../../shared/services/interfaces";
import {OrderService} from "../../shared/services/order.service";
import {SnackbarService} from "../../snackbar.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})

export class ProductViewComponent implements OnInit {
  quantity: number = 1;
  productSize: string;
  product?: Product;
  price: number | null = null;
  sizes: string[] = ['25-35 cm - XS', '35-45 cm - S', '45-55 cm - M', '55-65 cm - L']

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private snackbarService: SnackbarService
  ) {
    this.productSize = this.sizes[0];
  }
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params['id']) {
          return this.productsService.getById(params['id'])
        }
        return of(null)
      })
    ).subscribe({
      next: (product) => {
        this.product = product!
      },
      error: (e) => console.log(e)
    })
  }

  pushToCart(){
    let quantity: number = this.quantity;
    const order ={
      ...this.product!,
      size: this.productSize,
      quantity: quantity
    }
    if(order) {
      this.orderService.addOrder(order)
      this.snackbarService.openSnackBar('added to your cart!')
    }
}
}
