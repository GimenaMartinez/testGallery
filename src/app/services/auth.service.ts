import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginUser(email:string): Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/users?email="+email;
    return this.htttp.get<UserInterface>(url)
              .pipe(map(data=>JSON.stringify(data)));

  }
  setUser(user: UserInterface){
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  setToken(token){
    localStorage.setItem("accessToken", token);
  }

  getToken(){
    return localStorage.getItem("accessToken");
  }

  getCurrentUser():UserInterface{
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user: UserInterface = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  userLogout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }
}
