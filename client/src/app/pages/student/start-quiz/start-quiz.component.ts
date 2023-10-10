import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { ResultServiceService } from 'src/app/services/result-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {

  qid:any;
  questions:any;

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = false;

  results:any = {
    quizid:'',
    userid:'',
    marks:'',
    attempted:''
  }

  timer:any;
  t:any;

  constructor(private strategy:LocationStrategy, private _route:ActivatedRoute, private _question:QuestionsService, private _user:LoginService, private _result:ResultServiceService){}

  ngOnInit():void{
    this.preventBackButton();

    this.qid = this._route.snapshot.params['qid'];

    this.loadQuestions();
    
  }

  preventBackButton(){
    history.pushState(null, '', location.href);
    this.strategy.onPopState(()=>{
      history.pushState(null, '', location.href)
    })
  }

  loadQuestions(){
    this._question.getQuestionsofQuizForTest(this.qid).subscribe((data:any)=>{
      this.questions = data;
      this.timer = this.questions.length*3*60;
      console.log(data)

      this.startTimer();
    },(error)=>{
      console.log(error);
      Swal.fire("Error", "Error occured",'error');
    })
  }

  submitQuiz(){
    Swal.fire({
      title:'Do you want to submit the quiz?',
      confirmButtonText:"Submit",
      showCancelButton:true,
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed){
        
        this.evalQuiz();

      }
    })
  }

  startTimer(){
    this.t = window.setInterval(()=>{
      if(this.timer ==0){
        this.evalQuiz();
      }
      else{
        this.timer--;
      }
    },1000)
  }

  getFormattedTime(){
    let hours = Math.floor(this.timer/(60*60));
    let minutes = Math.floor(this.timer/60);
    let seconds = this.timer-minutes*60

    return `${hours} hrs: ${minutes} min:${seconds} sec`;
  }

  evalQuiz(){
    clearInterval(this.t);

    this._question.evalQuiz(this.questions).subscribe((data:any)=>{
      console.log(data)
      this.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
      this.correctAnswers = data.correctAnswers;
      this.attempted = data.attempted;
      this.isSubmit = true;

      this.results.quizid = this.qid;
      this.results.userid = this._user.getUser().id;
      this.results.marks = this.marksGot;
      this.results.attempted = this.attempted

      this._result.addResult(this.results).subscribe((data)=>{
        alert("success")
        console.log(data)
      },(error)=>{
        console.log(error);
        alert("error");
      });
      

    },(error)=>{
      console.log(error)
    })

    //call to server to evaluate
    //       this.questions.forEach((q:any)=>{
    //         if(q.chosenAnswer == q.answer){
    //           this.correctAnswers++;
    //           let marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
    //           this.marksGot += marksSingle;
    //         }

    //         if(q.correctAnswer.trim() != ''){
    //           this.attempted++;
    //         }
    //       });
  }

  printPage(){
    window.print();
  }

}
