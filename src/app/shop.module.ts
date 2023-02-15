import {NgModule} from "@angular/core";
import {DashboardComponent} from "./shop-page/dashboard/dashboard.component";
import {CategoryPageComponent} from "./shop-page/category-page/category-page.component";
import {ShopPageComponent} from "./shop-page/shop-page.component";
import {ProductViewComponent} from "./shop-page/product-view/product-view.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {AuthService} from "./shared/services/auth.service";
import {TokenInterceptor} from "./shared/services/token.interceptor";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ShopRoutingModule} from "../routing-modules/shop-routing.module";

@NgModule(
  {
    declarations: [
      DashboardComponent,
      CategoryPageComponent,
      ShopPageComponent,
      ProductViewComponent,
    ],
    imports: [
      MatSnackBarModule,
      RouterModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      MatSlideToggleModule,
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatSelectModule,
      ShopRoutingModule
    ],
    providers: [
      AuthService,
      {
        provide:HTTP_INTERCEPTORS,
        multi: true,
        useClass: TokenInterceptor
      }
    ],
    bootstrap: [ShopPageComponent]
  })
export class ShopModule {
}
