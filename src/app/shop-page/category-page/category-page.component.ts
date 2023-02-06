import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/services/interfaces";
import {CategoriesService} from "../../shared/services/categories.service";
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) { }
  ngOnInit(): void {
    this.categoriesService.getAll().subscribe(categories=>{
      this.categories = categories
    })
  }
}
