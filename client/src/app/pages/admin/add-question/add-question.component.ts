import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import {QuizService} from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  constructor(private _route:ActivatedRoute, private _question:QuestionsService, private router:Router, private _quiz:QuizService){}

  public Editor:any = ClassicEditor;

  qid:any;
  qtitle:any;
  quizToAlter:any;

  question:any = {
    quiz:{},
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quesmarks:''

  }

  ngOnInit(): void{

    this.qid = this._route.snapshot.params['qid'];
    this.qtitle = this._route.snapshot.params['title']

    this.question.quiz['qid'] = this.qid;
  }

  formSubmit(){

    if(this.question.content.trim() == '' || this.question.content == null){
      return;
    }

    this._question.addques(this.question).subscribe((data:any)=>{

      this._quiz.getAQuiz(this.qid).subscribe((data:any)=>{
        this.quizToAlter = data;
        this.quizToAlter.maxMarks = (parseInt(this.quizToAlter.maxMarks) + parseInt(this.question.quesmarks)).toString();
        this.quizToAlter.totalquestions = (parseInt(this.quizToAlter.totalquestions)+1).toString();
        this._quiz.updatequiz(this.quizToAlter).subscribe((data:any)=>{
          console.log(data);
        },(error)=>{
          console.log(error);
        });

      },(error)=>{
        alert("error");
        console.log(error);
      });

      


      console.log(data);

      Swal.fire("SUCCESS", "Question added",'success');
      this.router.navigate(['/admin/view-questions/'+this.qid+'/'+this.qtitle]);

    },(error)=>{

      Swal.fire("ERROR", "Error occured",'error');
    })
  }

}
