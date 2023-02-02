import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {AuthService} from "../../services/auth.service";
import {Category} from "../../services/intarfaces";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent implements OnInit {
    isAdmin: boolean = false;
    condition: boolean = false;
    categories: Category[] = [];
    links = [
        {url: '/home', name: 'Home'},
        {url: '/shop', name: 'Shop'},
        {url: '/about-us', name: 'About us'},
        {url: '/contact', name: 'Contact'},
        {url: '/login', name: 'Log in'},
        {url: '/register', name: 'Sign up'},
    ];

    constructor(
        private categoriesService: CategoriesService,
        public auth: AuthService,
    ) {}

    ngOnInit(): void {
        this.auth.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
    }

    toggle() {
        this.condition = !this.condition;
    }
}
