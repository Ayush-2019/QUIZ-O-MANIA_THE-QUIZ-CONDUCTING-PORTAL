import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private login:LoginService, private router:Router, private snack:MatSnackBar){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.login.isLoggedin() && this.login.getRole() == "ADMIN"){
        return true;
      }

      this.router.navigate(['login']);
      this.snack.open("You need to login as admin to access admin page","Ok",{
        duration:4000
      });

      return false;
  }
  
}
