import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

  user:any = null;

  constructor(private login:LoginService){}

  ngOnInit():void{
    this.user = this.login.getUser();
  }

}
