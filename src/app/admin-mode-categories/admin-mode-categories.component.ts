import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoriesService} from "../shared/services/categories.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../shared/services/interfaces";

@Component({
  selector: 'app-admin-mode-categories',
  templateUrl: './admin-mode-categories.component.html',
  styleUrls: ['./admin-mode-categories.component.scss']
})
export class AdminModeCategoriesComponent implements OnInit {
  // @ts-ignore
  @ViewChild('input') inputRef: ElementRef;
  myForm: FormGroup = new FormGroup({})
  categories: Category[] = []
  currentCategory: number | null = null;
  // @ts-ignore
  image: File
  // @ts-ignore
  category: Category
  categoryId: string| undefined =''
  updatedCategoryId?: string | null;
  categoryName: string =''
  // @ts-ignore
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
    });
    this.updateCategories();
  }

  changeCategory(i: number) {
    this.currentCategory = i;
  }
  onCategoryUpdate(id?: string) {
    this.updateCategories();
    this.updatedCategoryId = id;
    setTimeout(() => {
      this.updatedCategoryId = null;
    }, 1000)
  }

  updateCategories() {
    this.categoriesService.getAll().subscribe(categories => {
      this.categories = categories
    });
  }

  onCategoryDelete(event: boolean){
    this.updateCategories()
  }
}
