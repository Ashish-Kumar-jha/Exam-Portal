import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient
  ) { }

  public getQuestionsOfQuiz(qid:any){
    return this._http.get(`${baseurl}/question/quiz/${qid}`);
  }
}
