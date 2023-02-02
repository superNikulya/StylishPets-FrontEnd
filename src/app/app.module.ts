import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./shared/services/auth.service";
import { AdminModeCategoriesComponent } from './admin-mode-categories/admin-mode-categories.component';
import {TokenInterceptor} from "./shared/services/token.interceptor";
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import {AddCategoryComponent} from "./add-category/add-category.component";
import {InfoCompanyComponent} from "./info-company/info-company.component";
import {AdminModeLayoutComponent} from "./admin-mode-layout/admin-mode.layout.component";
import {CategoryPageComponent} from "./shop-page/category-page/category-page.component";
import {AdminModeConstructorComponent} from "./admin-mode-layout/admin-mode-constructor/admin-mode-constructor.component";
import {DashboardComponent} from "./shop-page/category-page/dashboard/dashboard.component";
import { AddProductComponent } from './add-category/add-product/add-product.component';
import {FormComponent} from "./admin-mode-categories/form/form.component";
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AdminToggleComponent } from './admin-toggle/admin-toggle.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      LoginPageComponent,
      AuthLayoutComponent,
      SiteLayoutComponent,
      RegisterPageComponent,
      InfoCompanyComponent,
      CategoryPageComponent,
      AdminModeLayoutComponent,
      AdminModeCategoriesComponent,
      AddCategoryComponent,
      HomePageComponent,
      ContactComponent,
      FormComponent,
      AdminModeConstructorComponent,
      AddProductComponent,
      ShopPageComponent,
      DashboardComponent,
      AdminToggleComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
    ],
  providers: [
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
