import {ActivatedRoute, Params} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../shared/services/products.service";
import {BehaviorSubject, map, of, Subject, switchMap} from "rxjs";
import {Product} from "../../shared/services/interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params['id']==='all-products') {
          return this.productsService.getAll()
        } else if (params['id']) {
          return this.productsService.getByCategoryId(params['id']);
        }
        return of(null)
      })
    ).subscribe({
      next: (products) => this.products = products!,
      error: (e) => console.log(e)
    })
  }
}
