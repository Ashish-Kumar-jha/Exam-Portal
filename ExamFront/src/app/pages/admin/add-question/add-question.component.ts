import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qid:any;

  constructor(private _router:ActivatedRoute) { }

  ngOnInit(): void {

    this.qid=this._router.snapshot.params.qid;
    console.log(this.qid);
  }

}
