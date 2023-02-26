import {ActivatedRoute, Params} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../shared/services/products.service";
import {Observable, of, switchMap} from "rxjs";
import { Products} from "../../shared/services/interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  products!:  Observable<Products>;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products = this.route.params.pipe(
      switchMap((params: Params) => {
        if (params['id']==='all-products') {
          return this.productsService.getAll();
        } else if (params['id']) {
          return this.productsService.getByCategoryId(params['id']);
        }
        return of([]);
      })
    );
  }
}
