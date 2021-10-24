import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
quizzes=[
  {
  qId:22,
  title:'JAVA',
  description:'Java Programming Language',
  maxMarks:'50',
  numberOfQuestion:'20',
  active:'',
  category:{
    title:'programing',
  }

},
{
  qId:22,
  title:'PYTHON',
  description:'Python programming language',
  maxMarks:'50',
  numberOfQuestion:'20',
  active:'',
  category:{
    title:'programing',
  }

},
]
  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
this.quizzes=data;
console.log(this.quizzes);
},
(error)=>{
  console.log(error);
  Swal.fire('Error !', "Error in loading data !!",'error');
}
);
  }

}
