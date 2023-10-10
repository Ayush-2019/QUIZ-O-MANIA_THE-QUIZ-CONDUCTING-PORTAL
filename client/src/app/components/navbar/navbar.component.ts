import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin = false;
  user:any = null;

  constructor(public login:LoginService, private router:Router){

  }

  ngOnInit():void{
    this.isLogin = this.login.isLoggedin();
    this.user = this.login.getUser();
    this.login.loginStatus.asObservable().subscribe(data=>{
      this.isLogin = this.login.isLoggedin();
      this.user = this.login.getUser();
    })
  }

  public logout(){
    this.login.logout();
    this.login.loginStatus.next(false);
    this.router.navigate(['login']);
  }

}
