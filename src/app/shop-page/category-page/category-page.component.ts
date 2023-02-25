import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/services/interfaces";
import {CategoriesService} from "../../shared/services/categories.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categories?: Observable<Category[]>;
  constructor(private categoriesService: CategoriesService) { }
  ngOnInit(): void {
    this.categories = this.categoriesService.getAll();
  }
}
