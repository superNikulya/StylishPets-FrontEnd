import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesService} from "../../shared/services/categories.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category, Product} from "../../shared/services/interfaces";
import {ProductsService} from "../../shared/services/products.service";
import {SnackbarService} from "../../snackbar.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private snackbarService: SnackbarService
  ) { }

  // @ts-ignore
  @ViewChild('input') inputRef: ElementRef;
  // @ts-ignore
  @ViewChild('productId') nameParagraph: ElementRef;
  @Input('categoryId') categoryId: string = '';
  @Input('categoryName') categoryName: string = '';
  @Output() categoryUpdate = new EventEmitter<string | undefined>();
  @Output() categoryDelete = new EventEmitter<boolean>();
  categoryForm: FormGroup = new FormGroup({});
  productForm: FormGroup = new FormGroup({});
  categories: Category[] = [];
  products: Product[] = [];
  // @ts-ignore
  image: File;
  imagePreview: any = ''
  // @ts-ignore
  category: Category;
  // @ts-ignore
  product: Product;
  // @ts-ignore
  newProduct: Product;
  condition: boolean = false;
  currentProduct: number | null = null;
  productId?: string = "";
  productNew: boolean = false;
  message: string| null =''
  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      "name": new FormControl(this.categoryName, [Validators.required]),
    });
    this.productForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "price": new FormControl(null, [Validators.required]),
      "characteristic": new FormControl(null, [Validators.required]),
    });
    this.categoriesService.getAll().subscribe(categories =>
      this.categories = categories);

    this.getProductByCategoryId()
  }


  getProductByCategoryId() {
    this.productsService.getByCategoryId(this.categoryId)
      .subscribe(products => this.products = products);
  }

  deleteCategory() {
    const choice = window.confirm(`Do you want to delete"${this.categoryName}"?`)
    if (choice) {
      this.categoriesService.delete(this.categoryId).subscribe(
        {
          next: (value) =>
            this.snackbarService.openSnackBar(`"${this.categoryName} was deleted"`),
          error: (err) => console.log(err),
          complete: () => this.categoryDelete.emit(true)
        })
    }
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }
    reader.readAsDataURL(file)
  }

  saveImgClick() {
    this.inputRef.nativeElement.click()
  }

  updateCategory() {
    this.categoriesService.update(this.categoryId, this.categoryForm.value.name)
      .subscribe(
        category => {
          this.snackbarService.openSnackBar(`"${category.name} was updated"`),
          this.categoryUpdate.emit(category._id)
        }
      );
    this.categoryForm.enable()
  }

  addNewProduct() {
    this.productNew = true
    this.currentProduct = null
    this.productForm.setValue({
      name: null,
      price: null,
      characteristic: null,
    })
  }
  closeNewProduct() {
  this.productNew = false
}
  changeProduct(i: number, product: Product) {
    this.productNew = false;
    this.currentProduct = i;
    this.productId = product._id
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      characteristic: product.characteristic
    })
  }

  addProduct(e: any){
    this.productForm.disable()
    this.productsService.create(
      this.productForm.value.name,
      this.productForm.value.price,
      this.productForm.value.characteristic,
      this.categoryId,
      this.image)
    this.productForm.enable()
    this.productForm.reset()
    this.snackbarService.openSnackBar('a new product was created')
    this.imagePreview = null
    this.productNew = false
    this.getProductByCategoryId()
  }
  updateProduct(e: any) {
    this.productsService.update(
      this.productId,
      this.productForm.value.name,
      this.productForm.value.price,
      this.productForm.value.characteristic,
      this.image
    ).subscribe(
      product => {
        this.snackbarService.openSnackBar(`"${product.name}" was updated`)
      })
    this.currentProduct = null
    this.getProductByCategoryId()
  }
  deleteProduct() {
    const choice = window.confirm('Do you want to delete this product?')
    if (choice) {
      this.productsService.delete(
        this.productId
      ).subscribe({
        next: (message) =>
          this.snackbarService.openSnackBar(`product was deleted`),
        error: (err) => console.log(err),
        complete: () => this.getProductByCategoryId()
      })
    }
  }
}
