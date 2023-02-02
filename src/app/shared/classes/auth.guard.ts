import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router'
import {of,Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService,
              private router: Router) {
  }
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    if(this.auth.checkRole()){
      return of( true)//admin
    } else{
      this.router.navigate(['/login'], {
        queryParams: {
          accessDenied: true
        }
      })
      return of (false)
    }
  }

  canActivateChild(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state)
  }
}
