import {NgModule} from "@angular/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../routing-modules/app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {AuthService} from "./shared/services/auth.service";
import {TokenInterceptor} from "./shared/services/token.interceptor";
import {AdminModeLayoutComponent} from "./admin-mode-layout/admin-mode.layout.component";
import {FormComponent} from "./admin-mode-categories/form/form.component";
import {AdminModeConstructorComponent} from "./admin-mode-layout/admin-mode-constructor/admin-mode-constructor.component";
import {AddProductComponent} from "./add-category/add-product/add-product.component";
import {AdminModeCategoriesComponent} from "./admin-mode-categories/admin-mode-categories.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {AdminToggleComponent} from "./admin-toggle/admin-toggle.component";
import {AdminModeRoutingModule} from "../routing-modules/admin-mode-routing.module";

@NgModule(
  {
    declarations: [
      FormComponent,
      AdminModeConstructorComponent,
      AddProductComponent,
      AdminModeLayoutComponent,
      AdminModeCategoriesComponent,
      AddCategoryComponent,
      AdminToggleComponent,
    ],
    imports: [
      CommonModule,
      MatSnackBarModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      MatSlideToggleModule,
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatSelectModule,
      AdminModeRoutingModule,
    ],
    providers: [
      AuthService,
      {
        provide:HTTP_INTERCEPTORS,
        multi: true,
        useClass: TokenInterceptor
      }
    ],
    bootstrap: [AdminModeLayoutComponent]
  })
export class AdminModeModule {
}
