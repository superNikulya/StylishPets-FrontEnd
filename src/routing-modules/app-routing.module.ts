import {RouterModule, Routes} from "@angular/router";
import {InfoCompanyComponent} from "../app/info-company/info-company.component";
import {SiteLayoutComponent} from "../app/shared/layouts/site-layout/site-layout.component";
import {HomePageComponent} from "../app/home-page/home-page.component";
import {ContactComponent} from "../app/contact/contact.component";
import {NgModule} from "@angular/core";
import {ProductViewComponent} from "../app/shop-page/product-view/product-view.component";
import {CartComponent} from "../app/cart/cart.component";


const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path: 'home' , component: HomePageComponent},
    {path: 'shop',  loadChildren: () => import('../app/shop.module').then(module => module.ShopModule)},
    {path: 'product', component: ProductViewComponent},
    {path: 'product/:id', component: ProductViewComponent},
    {path: 'about-us', component: InfoCompanyComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cart', component: CartComponent},
  ]},
  {
    path: 'admin-mode', loadChildren: () => import('../app/admin-mode.module').then(module => module.AdminModeModule),
  },
  {
    path: 'auth', loadChildren: () => import('../app/auth.module').then(module => module.AuthModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
