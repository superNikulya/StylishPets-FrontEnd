import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthLayoutComponent} from "../app/shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "../app/shared/layouts/site-layout/site-layout.component";
import {LoginPageComponent} from "../app/login-page/login-page.component";
import {RegisterPageComponent} from "../app/register-page/register-page.component";

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
      {path:'', component: SiteLayoutComponent},
      {path:'login', component: LoginPageComponent},
      {path:'register', component: RegisterPageComponent},
    ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [
    AuthLayoutComponent
  ]
})
export class AuthRoutingModule {
}
