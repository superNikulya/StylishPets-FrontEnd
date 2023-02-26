import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthRoutingModule} from "../routing-modules/auth-routing.module";

@NgModule(
  {
    declarations: [
      LoginPageComponent,
      AuthLayoutComponent,
      RegisterPageComponent,
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
      AuthRoutingModule,
    ],
    providers: [],
    bootstrap: [AuthLayoutComponent]
  })
export class AuthModule {
}
