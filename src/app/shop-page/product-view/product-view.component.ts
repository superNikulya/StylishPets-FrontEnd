import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, of, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import { Order, Product} from "../../shared/services/interfaces";
import {OrderService} from "../../shared/services/order.service";
import {SnackbarService} from "../../shared/services/snackbar.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})

export class ProductViewComponent implements OnInit {
  //@ts-ignore
  @ViewChild('quantity') quantity:ElementRef;
  product$!: Observable<Product | null> ;
  price: number| null = null;
  productSize ='25-35 cm - XS';
  sizes: string[] = ['25-35 cm - XS', '35-45 cm - S', '45-55 cm - M', '55-65 cm - L'];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private snackbarService: SnackbarService
  ) { }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        if (params['id']) {
          return this.productsService.getById(params['id']);
        }
        return of(null);
      })
    );
  }

  pushToCart(product: Product){
    const quantity: number = this.quantity.nativeElement.value;
    const order = {
      ...product,
      size: this.productSize,
      quantity: quantity
    };
    if(order)
      this.orderService.orders.push(order);
    this.snackbarService.openSnackBar('added to your cart!');
  }
}
