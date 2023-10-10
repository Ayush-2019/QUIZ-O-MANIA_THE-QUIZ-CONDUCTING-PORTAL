import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private _category:CategoryService,
    private snack:MatSnackBar,
    public login:LoginService, 
    private router:Router
  ){}

  categories:any;

  ngOnInit():void{
    this._category.categories().subscribe((data:any)=>{

      this.categories = data;
    },(error)=>{
      this.snack.open("An error occured","Ok",{
        duration:4000
      });
    })
  }

  public logout(){
    this.login.logout();
    this.login.loginStatus.next(false);
    this.router.navigate(['login']);
  }

}
