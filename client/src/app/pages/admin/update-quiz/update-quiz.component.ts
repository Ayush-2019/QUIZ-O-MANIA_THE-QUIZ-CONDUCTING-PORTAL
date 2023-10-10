import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {

  constructor(private route:ActivatedRoute, private quiz:QuizService, private category:CategoryService, private router:Router){}

  qid = null;
  quizData:any;
  categories:any;

  ngOnInit():void{

    this.qid = this.route.snapshot.params['qid'];

    this.quiz.getAQuiz(this.qid).subscribe((data:any)=>{

      this.quizData = data;
    },(error)=>{
      console.log(error);
    });

    this.category.categories().subscribe((data:any)=>{
      this.categories = data;
    },(error)=>{
      alert('error');
    })
  };

  public updateQuiz(){

    this.quiz.updatequiz(this.quizData).subscribe((data)=>{
      Swal.fire("Success","Quiz details updated",'success').then((e)=>{
        this.router.navigate(['/admin/quiz']);
      })
    },(error)=>{
      Swal.fire("ERROR","Error in updating quiz",'error');
    })

  }

}
