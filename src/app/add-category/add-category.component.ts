import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../shared/services/intarfaces";
import {CategoriesService} from "../shared/services/categories.service";

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
  categoryName: string =''
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
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
          alert("a new category was added")
          this.changeCondition()
          // this.router.navigate([''])
          this.categoryId = this.category._id
          this.categoryName = this.category.name
          this.myForm.disable()
        })
  }
}
