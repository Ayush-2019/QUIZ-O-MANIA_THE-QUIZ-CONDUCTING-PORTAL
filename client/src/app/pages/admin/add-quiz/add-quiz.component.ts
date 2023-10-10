import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  constructor(private _categories:CategoryService, private login:LoginService, private snack:MatSnackBar, private quizService:QuizService, private router:Router){}

  categories:any = [];

  quiz_creater = this.login.getUser().firstName + ' ' + this.login.getUser().lastName;

  quizData = {
    title:'',
    description:'',
    maxMarks:'0',
    totalquestions:'0',
    active:false,
    category:{
      cid:''
    },
    creater: this.quiz_creater
  };


  ngOnInit():void{

    this._categories.categories().subscribe((data:any)=>{

      this.categories = data;
      console.log(this.categories)
    },(error)=>{

      console.log(error);
      Swal.fire("ERROR","An error occured",'error');
    })
  }

  addQuiz(){

    if(this.quizData.title.trim() == '' || this.quizData.title == null){
      this.snack.open("Title required", "Ok", {
        duration:4000
      });
      return;
    }

    this.quizService.addquiz(this.quizData).subscribe((data:any)=>{
      Swal.fire("SUCCESS","Quiz added succesfully",'success').then((e)=>{

        this.router.navigate(['/admin/quiz']);
      });

      this.quizData = {
        title:'',
        description:'',
        maxMarks:'',
        totalquestions:'',
        active:false,
        category:{
          cid:''
        },
        creater: this.quiz_creater
      };
    },(error)=>{
      console.log(error);
      Swal.fire("ERROR","An error occured",'error');
    })
  }

}
