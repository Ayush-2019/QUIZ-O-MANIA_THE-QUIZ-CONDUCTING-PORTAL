import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  public getQuestionsofQuiz(qid:any){

    return this.http.get(`${baseUrl}/questions/quiz/all/${qid}`);
  }

  public getQuestionsofQuizForTest(qid:any){

    return this.http.get(`${baseUrl}/questions/quiz/${qid}`);
  }

  public addques(question:any){
    return this.http.post(`${baseUrl}/questions/`, question);
  }

  public deleteques(qid:any){
    return this.http.delete(`${baseUrl}/questions/${qid}`);
  }

  public evalQuiz(questions:any){
      return this.http.post(`${baseUrl}/questions/eval-quiz`,questions)
  }
}
