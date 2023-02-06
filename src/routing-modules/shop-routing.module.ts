import {NgModule} from "@angular/core";
import {ShopPageComponent} from "../app/shop-page/shop-page.component";
import {DashboardComponent} from "../app/shop-page/dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ShopPageComponent, children: [
      {path:'', redirectTo:'all-products', pathMatch:'full'},
      {path: ':id' , component: DashboardComponent},
      {path: 'all-products', component: DashboardComponent},
    ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
