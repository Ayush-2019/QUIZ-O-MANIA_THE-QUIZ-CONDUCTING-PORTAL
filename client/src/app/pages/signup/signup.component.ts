import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService, private snackbar:MatSnackBar){

  }

  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }

  formSubmit(){
    console.log(this.user)

    if(this.user.username == '' || this.user.username == null){
      this.snackbar.open("Usernam required!!",'Ok',{
        duration:4000
      });
      return;
    }

    //addUser

    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        //success
        console.log(data);
        Swal.fire('Success', 'User Registered with id '+data.id,'success');
      },
      (error)=>{
        console.log(error);
        this.snackbar.open("error", "Ok")
      }
    )
  }
}
