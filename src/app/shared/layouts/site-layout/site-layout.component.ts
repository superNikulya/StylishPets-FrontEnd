import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Category} from "../../services/interfaces";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent {
  condition = false;
  categories: Category[] = [];
  cartCondition = false;
  links = [
    {url: '/home', name: 'Home'},
    {url: '/shop', name: 'Shop'},
    {url: '/about-us', name: 'About us'},
    {url: '/contact', name: 'Contact', },
    {url: 'auth/login', name: 'Log in', },
    {url: 'auth/register', name: 'Sign up'},
  ];

  constructor(
    public auth: AuthService,
    public orderService: OrderService
  ) {}

  cart(){
    this.orderService.cartOpenClose();
  }
  toggle() {
    this.condition = !this.condition;
  }
}
