import {AdminModeCategoriesComponent} from "./admin-mode-categories/admin-mode-categories.component";
import {AdminModeConstructorComponent} from "./admin-mode-layout/admin-mode-constructor/admin-mode-constructor.component";
import {AdminModeLayoutComponent} from "./admin-mode-layout/admin-mode.layout.component";
// import {AllProductsPageComponent} from "./all-products-page/all-products-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {InfoCompanyComponent} from "./info-company/info-company.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {DashboardComponent} from "./shop-page/category-page/dashboard/dashboard.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ShopPageComponent} from "./shop-page/shop-page.component";
import {ContactComponent} from "./contact/contact.component";
import {FormComponent} from "./admin-mode-categories/form/form.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
      {path:'', redirectTo:'home', pathMatch:'full'},
          {path: 'home' , component: HomePageComponent},
          {path: 'shop', component: ShopPageComponent, children: [
                  {path:'', redirectTo:'all-products', pathMatch:'full'},
                  {path: ':id' , component: DashboardComponent},
                  {path: 'all-products', component: DashboardComponent},
              ]},
          {path: 'about-us', component: InfoCompanyComponent},
          {path: 'contact', component: ContactComponent},
          {path: 'login', component: LoginPageComponent},
          {path: 'register', component: RegisterPageComponent},
        ]},

  {path: 'admin-mode',  component: AdminModeLayoutComponent , canActivate: [AuthGuard], children: [
            {path:'', redirectTo:'admin-constructor', pathMatch:'full'},
          {path: 'admin-categories', canActivate: [AuthGuard], component: AdminModeCategoriesComponent},
          {path: 'admin-categories/new', canActivate: [AuthGuard], component: AddCategoryComponent},
          {path: 'form-category/:id', canActivate: [AuthGuard], component: FormComponent},
          {path: 'form-category', canActivate: [AuthGuard], component: FormComponent},
          {path: 'admin-constructor', canActivate: [AuthGuard], component: AdminModeConstructorComponent},
    ]},

    {path: '', component: AuthLayoutComponent, children: [
        {path:'', component: SiteLayoutComponent},
            {path:'login', component: LoginPageComponent},
            {path:'register', component: RegisterPageComponent},
    ]},
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
