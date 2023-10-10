import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {

  constructor(
    private _route:ActivatedRoute,
    private _quizservice:QuizService,
    private _snack:MatSnackBar,
    private _router:Router
  ){}

  qid:any;
  quiz:any;

  ngOnInit():void{

    this.qid = this._route.snapshot.params['qid'];

    this._quizservice.getAQuiz(this.qid).subscribe((data)=>{
      this.quiz = data;
    },(error)=>{
      console.log(error);
      this._snack.open("Error occured","Ok",{
        duration:4000
      })
    })

  }

  start_quiz(){

    Swal.fire({
      title:'Do you want to Start the quiz?',
      confirmButtonText:"Start",
      showCancelButton:true,
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed){
          this._router.navigate(['/start_quiz/'+this.qid])
      }
    })
  }

}
