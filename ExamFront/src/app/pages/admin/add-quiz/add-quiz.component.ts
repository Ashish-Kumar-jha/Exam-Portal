import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
categories=[
  {
    cid:23,
    title:'Programing'
  },
  
]
quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    category:{
      cid:'',
    },
};
  constructor(private _cat:CategoryService,private snack:MatSnackBar, private _quiz:QuizService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        //console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!!","Error in loading data",'error');
      }
    
    );
  }
//add quiz
addQuiz(){
  if(this.quizData.title==''|| this.quizData.title==null){
    this.snack.open("Title Required","",{
      duration:3000,
    });
    return;
  }
this._quiz.addQuiz(this.quizData).subscribe(

  (data)=>{
    Swal.fire("Success","Quiz Added Sucessfully",'success');
    this.quizData={
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestion:'',
      active:true,
      category:{
        cid:'',
      },
  };
  },
  (error)=>{
    Swal.fire('error',"ERROR IN LOADING !!",'error');
    console.log(error);
  }

);
}
}
