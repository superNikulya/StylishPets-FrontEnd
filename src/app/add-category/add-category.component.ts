import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../shared/services/interfaces";
import {CategoriesService} from "../shared/services/categories.service";
import {SnackbarService} from "../snackbar.service";
@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss']
})

export class AddCategoryComponent implements OnInit {
  // @ts-ignore
  @ViewChild('input') inputRef: ElementRef;
  myForm: FormGroup = new FormGroup({});
  // @ts-ignore
  image: File;
  categories: Category[] =[];
  // @ts-ignore
  category: Category;
  categoryId: string ='';
  condition: boolean = false;
  constructor(
    private categoriesService: CategoriesService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
    })
  }

  changeCondition(){
    this.condition= true
  }

  onSubmit(){
    this.myForm.disable()
    this.categoriesService.create(this.myForm.value.name, this.image)
      .subscribe(
        category => {
          this.category = category
          this.myForm.disable()
          this.categoryId = this.category._id
          this.changeCondition()
          this.snackbarService.openSnackBar('Category was added')
        })
  }
}
