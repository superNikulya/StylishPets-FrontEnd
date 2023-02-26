import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {
  links = [
    {url: 'login', name: 'Log in', },
    {url: 'register', name: 'Sign up'},
  ];
}
