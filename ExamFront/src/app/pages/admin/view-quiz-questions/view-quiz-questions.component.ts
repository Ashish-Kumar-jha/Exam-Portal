import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
qid:any;
title:any;
questions=[
  {
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  },
];
  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;
    this.title=this._route.snapshot.params.title;
     this._question.getQuestionsOfQuiz(this.qid).subscribe(
       (data:any)=>{
        console.log(data);
        this.questions=data;
       },
       (error:any)=>{
        console.log(error);
       }
     );
  }
}
