import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private _login:LoginService, private _router:Router, private _snack:MatSnackBar){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this._login.getUser() == null){
        return true;
      }

      if(this._login.getRole() == 'ADMIN'){
        this._router.navigate(['admin']);
        this._snack.open("You are already logged in","Ok",{
          duration:4000
        });
        return false;
      }

      this._router.navigate(['user-dashboard']);
        this._snack.open("You are already logged in","Ok",{
          duration:4000
        });

        return false;

    
  }
  
}
