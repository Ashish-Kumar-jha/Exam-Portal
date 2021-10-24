import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  public categories(){
    return this._http.get(`${baseurl}/category/`);
  }


  //add new categories
  public addCategory(category: { title: string; description: string; }){
    return this._http.post(`${baseurl}/category/`, category);
  }

}
