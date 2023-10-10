import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-welcome',
  templateUrl: './student-welcome.component.html',
  styleUrls: ['./student-welcome.component.css']
})
export class StudentWelcomeComponent {

  constructor(private login:LoginService){}

  user:any;

  ngOnInit():void{

    this.user = this.login.getUser();

  }

}
