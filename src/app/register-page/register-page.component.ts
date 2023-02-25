import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../shared/services/auth.service";
import { Subscription} from "rxjs";
import { Router} from "@angular/router";
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  myForm: FormGroup = new FormGroup({});
  constructor(private auth: AuthService,
              private router: Router,) {
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onSubmit(){
    this.myForm.disable();
    this.subscription = this.auth.register(this.myForm.value).subscribe({
      next: (v) => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true
          }
        });
      },
      error: (e) => {
        console.warn(e, "does not work");
        this.myForm.enable();
      },
      complete: () => console.info('complete')
    });
  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.minLength(2)]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(6)]),
      "email": new FormControl(null, [Validators.required, Validators.email])
    });
  }
}
