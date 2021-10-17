import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any=null;
  constructor(private login: LoginserviceService) { }

  ngOnInit(): void {
    this.user=this.login.getUser();
  }

}
