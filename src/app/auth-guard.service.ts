import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/Login/service/login.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.loginService.loggedIn){
        return true;
    }
  else{
      this.router.navigate([''], { queryParams: { returnUrl: state.url }});
      return false;
  }
    }
}