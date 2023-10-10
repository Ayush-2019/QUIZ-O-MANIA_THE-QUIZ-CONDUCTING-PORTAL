import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ResultServiceService } from 'src/app/services/result-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-attempts',
  templateUrl: './quiz-attempts.component.html',
  styleUrls: ['./quiz-attempts.component.css']
})
export class QuizAttemptsComponent {

  constructor(private _results:ResultServiceService, private _route:ActivatedRoute, private _user:LoginService, private _quiz:QuizService){}

  results:any;
  qid:any;
  qtitle:any;
  user:any;
  displayedColumns: string[] = ['userid','name', 'marks', 'attempted','submitDate','submitTime'];
  quiz:any;

  months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

  ngOnInit():void{

    this.qid = this._route.snapshot.params['qid'];
    this.qtitle = this._route.snapshot.params['title'];

    this._quiz.getAQuiz(this.qid).subscribe((data:any)=>{
      this.quiz = data;
    });

    this._results.getResultofQuiz(this.qid).subscribe((data:any)=>{
        this.results = data;
        console.log(this.results)

        this.results.forEach((res:any)=>{
          this._user.getUserById(res.userid).subscribe((data:any)=>{
            res['firstName'] = data.firstName;
            res['lastName'] = data.lastName;
          },(error)=>{
            console.log(error);
            Swal.fire("Error", "Error Occured",'error')
          })
          

        });
    },(error)=>{
      console.log(error)
    })
  }



}
