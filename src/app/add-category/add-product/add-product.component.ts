import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import {Category, Product} from "../../shared/services/interfaces";
import {SnackbarService} from "../../snackbar.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
  @Input ('categoryId') categoryId: string  = '';
  // @ts-ignore
  @ViewChild('input') inputRef: ElementRef;
  form: FormGroup = new FormGroup({})
  myForm: FormGroup = new FormGroup({})
  // @ts-ignore
  image: File
  imagePreview: any =''
  categories: Category[] =[]
  // @ts-ignore
  product: Product
  products: Product[] = []
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        "name": new FormControl(null, [Validators.required]),
        "price": new FormControl(null, [Validators.required]),
        "characteristic": new FormControl(null, [Validators.required]),
    });
    this.getProducts()
  }

  getProducts(){
    this.productsService.getByCategoryId(this.categoryId).subscribe(products => {
      this.products = products
    });
  }

  onFileUpload(event: any){
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()
      reader.onload = () => {
      this.imagePreview= reader.result
    }
    reader.readAsDataURL(file)
    }

    saveImgClick(){
    this.inputRef.nativeElement.click()
    }

    close(){
      this.snackbarService.openSnackBar('Category and products was added', 'ok')
      this.router.navigate(['admin-mode'])
    }

    onSubmit(){
    this.form.disable()
      this.productsService.create(
        this.form.value.name,
        this.form.value.price,
        this.form.value.characteristic,
        this.categoryId,
        this.image)
        .subscribe(
          product => {
            this.product = product
            this.getProducts()
            this.snackbarService.openSnackBar('Product was added')
            this.form.enable()
            this.form.reset()
            this.imagePreview = null
          }
          )
  }
}
