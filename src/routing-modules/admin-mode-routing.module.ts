import {RouterModule, Routes} from "@angular/router";
import {AdminModeLayoutComponent} from "../app/admin-mode-layout/admin-mode.layout.component";
import {AuthGuard} from "../app/shared/classes/auth.guard";
import {AdminModeCategoriesComponent} from "../app/admin-mode-categories/admin-mode-categories.component";
import {AddCategoryComponent} from "../app/add-category/add-category.component";
import {FormComponent} from "../app/admin-mode-categories/form/form.component";
import {AdminModeConstructorComponent} from "../app/admin-mode-layout/admin-mode-constructor/admin-mode-constructor.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: AdminModeLayoutComponent , canActivate: [AuthGuard], children: [
    {path:'', redirectTo:'admin-constructor', pathMatch:'full'},
    {path: 'admin-categories', canActivate: [AuthGuard], component: AdminModeCategoriesComponent},
    {path: 'admin-categories/new', canActivate: [AuthGuard], component: AddCategoryComponent},
    {path: 'form-category/:id', canActivate: [AuthGuard], component: FormComponent},
    {path: 'form-category', canActivate: [AuthGuard], component: FormComponent},
    {path: 'admin-constructor', canActivate: [AuthGuard], component: AdminModeConstructorComponent},
  ]},
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModeRoutingModule {
}
