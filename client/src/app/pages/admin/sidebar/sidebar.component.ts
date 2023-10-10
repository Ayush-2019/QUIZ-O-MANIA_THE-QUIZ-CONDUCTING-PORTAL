import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public login:LoginService, private router:Router){}

  public logout(){
    this.login.logout();
    this.login.loginStatus.next(false);
    this.router.navigate(['login']);
  }

}
