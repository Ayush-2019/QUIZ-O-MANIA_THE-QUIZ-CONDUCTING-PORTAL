import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  isLogin = false;
  user:any = null;

  constructor(public login:LoginService){

  }

  ngOnInit():void{
    this.isLogin = this.login.isLoggedin();
    this.user = this.login.getUser();
  }


}
