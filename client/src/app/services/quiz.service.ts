import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getQuiz(){
    return this.http.get(`${baseUrl}/quiz/`)
  }

  public addquiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/`, quiz)
  }

  public deletequiz(qid:any){
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  public getAQuiz(qid:any){
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  public updatequiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/`,quiz);
  }

  public getQuizofCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`)
  }
}
