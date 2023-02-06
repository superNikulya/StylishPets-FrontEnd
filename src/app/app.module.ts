import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent } from './app.component';
import {AppRoutingModule } from "../routing-modules/app-routing.module";
import {SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./shared/services/auth.service";
import {TokenInterceptor} from "./shared/services/token.interceptor";
import {HomePageComponent } from './home-page/home-page.component';
import {ContactComponent } from './contact/contact.component';
import {InfoCompanyComponent} from "./info-company/info-company.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from '@angular/material/icon';
import {CartComponent} from './cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    InfoCompanyComponent,
    HomePageComponent,
    ContactComponent,
    CartComponent,
  ],
    imports: [
      MatSnackBarModule,
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatSlideToggleModule,
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatSelectModule,
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
