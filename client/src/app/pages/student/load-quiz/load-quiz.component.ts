import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {

  constructor(private _route: ActivatedRoute, private quiz:QuizService){}

  catid:any;
  quizzes:any;

  ngOnInit():void{

    

    this._route.params.subscribe((params)=>{
      this.catid = params['catid'];

      if(this.catid == 0){
        //load all quiz
        this.quiz.getQuiz().subscribe((data:any)=>{
          this.quizzes = data;
          console.log(this.quizzes);
        },(error)=>{
          console.log(error);
        })
      }
      else{
        //load specific quiz
        this.quiz.getQuizofCategory(this.catid).subscribe((data:any)=>{
          this.quizzes = data;
        },(error)=>{
          console.log(error);
          alert("error")
        })

      }
    })
    
    
  }

}
