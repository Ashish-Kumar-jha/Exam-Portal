import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseurl}/quiz/`);
  }
  public addQuiz(quiz:any){
    return this._http.post(`${baseurl}/quiz/`,quiz);
  }
  public deleteQuiz(qId: any){
    return this._http.delete(`${baseurl}/quiz/${qId}`);
  }

  //get the single quiz
  public getQuiz(qId: any){
    return this._http.get(`${baseurl}/quiz/${qId}`)
  }

  public updateQuiz(quiz:any){
    return this._http.put(`${baseurl}/quiz/`,quiz);
  }
}
