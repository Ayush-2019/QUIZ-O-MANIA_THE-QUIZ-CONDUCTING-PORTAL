import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  constructor(private _http:HttpClient) { }

  public addResult(result:any){
    return this._http.post(`${baseUrl}/results/`, result);
  }

  public getResultofQuiz(qid:any){
    return this._http.get(`${baseUrl}/results/quiz_result/${qid}`)
  }

}
