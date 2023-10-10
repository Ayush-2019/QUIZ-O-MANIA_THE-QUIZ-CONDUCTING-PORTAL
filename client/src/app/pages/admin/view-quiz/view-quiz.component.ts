import { Component } from '@angular/core';
import { MatCardActions } from '@angular/material/card';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {

  constructor(private _quiz:QuizService){}

  quiz:any = [];

  ngOnInit():void{
    this._quiz.getQuiz().subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error","Error in loading data",'error');
      }
    )
  }

  deleteQuiz(qid:any, qtitle:any){

    Swal.fire({
      icon:'warning',
      title:"Are you sure",
      text:`The quiz with title ${qtitle} will be deleted`,
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{

      if(result.isConfirmed){

        this._quiz.deletequiz(qid).subscribe((data)=>{
          Swal.fire("Done","Quiz deleted",'success');
          this.quiz = this.quiz.filter((quiz:any)=>quiz.qid != qid)
        },(error)=>{
          console.log(error);
          Swal.fire("Error","Error in deleting quiz",'error');
        })
      }
    })
  }

}
