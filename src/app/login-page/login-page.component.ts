import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

//kevinminion@gmail.com ( login for admin)
//kevinthekevin (password for admin)

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  myForm: FormGroup = new FormGroup({
    "name": new FormControl(),
    "password": new FormControl(null, [Validators.required, Validators.minLength(6)]),
    "email": new FormControl(null, [Validators.required, Validators.email])
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  onSubmit() {
    this.myForm.disable();
    this.subscription= this.auth.login(this.myForm.value).subscribe({
      next: (v) => {
        if(this.auth.checkRole()){
          this.auth.isAdmin.next(true);
          this.router.navigate(['/admin-mode']);
        } else { this.auth.isAdmin.next(false);
          this.router.navigate(['/']);
        }
      },
      error: (e) => {
        console.warn(e,"does not work");
        this.myForm.enable();
      },
      complete: () =>
        console.info('complete')
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe ((params:Params)=>{
      if(params['registered']) {
        //you can log in with your data
      }
      else if (params['accessDenied']) {
        //firstly you should log in
      }
    });
  }
}
