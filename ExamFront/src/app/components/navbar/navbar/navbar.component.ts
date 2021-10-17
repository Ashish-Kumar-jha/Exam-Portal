import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  user:any=null;

  constructor(public login: LoginserviceService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();   
    this.user=this.login.getUser();
  }
  public logout(){
    this.login.logout();
    this.isLoggedIn=false;
    this.user=null;
    window.location.reload();
  }

}
