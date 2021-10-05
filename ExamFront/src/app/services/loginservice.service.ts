import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl1 from './helper1';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  public generateToken(loginuser:any){
    return this.http.post(`${baseurl1}/generate-token`,loginuser);
  }

  //to save token in local storege for login purpose
  public loginuserToken(token:any){
    localStorage.setItem('token',token);
    return true;
  }
  //checking that user is loged in or not
  public isLoggedIn(){
  let tokenstr=localStorage.getItem("token")
  if(tokenstr==undefined ||tokenstr==''||tokenstr==null){
    return false;
  }
  else{
    return true;
  }
  }
  //for logout
public logout(){
localStorage.removeItem('token');
localStorage.removeItem('user');
return true;
}  

//grt token
public gettoken(){
  return localStorage.getItem('token');
}
public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user))
}
public getUser(){
let userStr=localStorage.getItem('user');
if(userStr!=null){
  return JSON.parse(userStr);
}else{
  this.logout();
  return null;
}
}
//get user role
public getUserRole(){
  let user=this.getUser();
  return user.get.author

}
}
