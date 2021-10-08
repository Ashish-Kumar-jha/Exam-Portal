import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginuser={
username:'',
password:''
};
  constructor(private login:LoginserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.loginuser.username.trim()=='' || this.loginuser.username==null){
      Swal.fire("ERROR","Username Cannot Be Null","warning");
    }

    if(this.loginuser.password.trim()=='' || this.loginuser.password==null){
      Swal.fire("ERROR","Password Cannot Be Null","warning");
    }
    this.login.generateToken(this.loginuser).subscribe(
      (data:any)=>{
        Swal.fire("SUCCESS");
        console.log(data);

        //login
        this.login.loginuserToken(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>
          {
            this.login.setUser(user);
            console.log(user);
           
            if(this.login.getUserRole() == 'ADMIN'){
               //redirect ADMIN: admin-dashbord
              window.location.href='/admin';
              // this.router.navigate(["admin"]);

            }
            else if(this.login.getUserRole() == 'NORMAL'){
              //redirext NORMAL: normal-dashbord
              window.location.href='/user-dashboard';
              // this.router.navigate(["user-dashboard"]);
            }
            else{
              this.login.logout();

              
            }
          }
        );
        
      },
      (error:any)=>{
        alert("ERROR");
        console.log(error);
      }
    );
  }
}
