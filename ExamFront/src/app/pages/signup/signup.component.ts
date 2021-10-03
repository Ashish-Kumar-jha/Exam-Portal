import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public user={
  username:'',
  password:'',
  firstname:'',
  lastname:'',
  email:'',
  phone:'',
};
  constructor(private userService : UserService) { }

  ngOnInit(): void {}
  formSubmit(){
    if(this.user.username==null||this.user.email==null||this.user.password==null||this.user.firstname==null||this.user.lastname==null||this.user.phone==null){
      Swal.fire("ERROR","Field cannot be null/blanck","warning");
    }
    else if(this.user.username==''||this.user.email==''||this.user.password==''||this.user.firstname==''||this.user.lastname==''){
      Swal.fire("ERROR","Field cannot be null/blanck","warning");
    }
    else{
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        Swal.fire("SUCCESS","REGISTERED SUCCESSFULL","success");
      },
      (error)=>{
        alert("Something went wrong");
      }
    )
    }
  }

}
