import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username : '',
    password : ''
  };

  constructor(private snackbar:MatSnackBar, private login:LoginService, private router:Router){


  }

  formSubmit(){
    console.log("Submitted");

    if(this.loginData.username.trim() == '' || this.loginData.username == null){
      this.snackbar.open("Username is required",'Ok',{
        duration:4000
      });

      return;
    }

    if(this.loginData.password.trim() == '' || 
      this.loginData.password == null){
      this.snackbar.open("Password is required",'Ok',{
        duration:4000
      });

      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("Success");
        console.log(data);

        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            if(this.login.getRole() == "ADMIN"){

              //admin
              // window.location.href = '/admin'

              this.router.navigate(['admin']);
              this.login.loginStatus.next(true);
            }else if(this.login.getRole() == "student"){

              //student
              // window.location.href = '/user-dashboard'
              this.router.navigate(['user-dashboard']);
              this.login.loginStatus.next(true);
            }else{
              //logout here

              this.login.logout();
            }
              
          }
        )
      },
      (error)=>{
        console.log("error");
        console.log(error);
        this.snackbar.open("Invalid Credentials!!",'Ok',{
          duration:4000
        })
      }
    )

  }

}
