import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent {

  qid:any;
  qtitle:any;

  questions:any = [];

  del_ques:any;

  quizToAlter:any;

  constructor(private route:ActivatedRoute, private _question:QuestionsService, private _quiz:QuizService){}

  ngOnInit():void{

    this.qid = this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['title'];
    this._question.getQuestionsofQuiz(this.qid).subscribe((data:any)=>{
      console.log(data);
      this.questions = data;
    },(error)=>{
      console.log(error)
    })
  }

  deletequestion(quesid:any, i:any){

    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure?',
      text:`Question number ${i} will be deleted.`
    }).then((result)=>{

      if(result.isConfirmed){

        this._question.deleteques(quesid).subscribe((data)=>{
          Swal.fire("Done","Question Deleted Succesfully",'success');
          for(let q of this.questions){
            if(q.quesid == quesid){
              this.del_ques = q;
              break;
            }
          }
          this.questions = this.questions.filter((q:any)=>q.quesid != quesid);

          this._quiz.getAQuiz(this.qid).subscribe((data:any)=>{
            this.quizToAlter = data;
            this.quizToAlter.maxMarks = (parseFloat(this.quizToAlter.maxMarks) - parseFloat(this.del_ques.quesmarks)).toString();
            this.quizToAlter.totalquestions = (parseFloat(this.quizToAlter.totalquestions)-1).toString();

            this._quiz.updatequiz(this.quizToAlter).subscribe((data:any)=>{
              console.log(data);
            },(error)=>{
              console.log(error)
            })
          },(error)=>{
            console.log(error)
          })
        },(error)=>{
          Swal.fire("ERROR","Error in deleting question",'error')
        })
      }
    })
  }



}
