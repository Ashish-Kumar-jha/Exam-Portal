import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';
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
  constructor(private login:LoginserviceService) { }

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
      },
      (error:any)=>{
        alert("ERROR");
        console.log(error);
      }
    );
  }
}
