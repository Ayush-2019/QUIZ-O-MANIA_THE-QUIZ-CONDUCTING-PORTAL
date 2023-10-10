import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatus = new Subject<boolean>();

  constructor(private http:HttpClient) {}

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

    //gen. token

    public generateToken(loginData:any){

      return this.http.post(`${baseUrl}/generate-token`, loginData);
   }

   //Saving token in storage

   public loginUser(token:any){

    localStorage.setItem("token",token);
    // this.loginStatus.next(true);
    return true;
   }

   //check for login

   public isLoggedin(){
      let token = localStorage.getItem("token"); //in form of string 

      if(token == undefined || token == '' || token == null){

        return false;
      }else{
        return true;
      }
   }

   public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
   }

   //get the token

   public getToken(){
    return localStorage.getItem("token");
   }

   //store user details

   public setUser(user:any){
    localStorage.setItem("user", JSON.stringify(user))
   }

   public getUser(){
    let user = localStorage.getItem("user"); //string format

    if(user!=null){
      return JSON.parse(user)
    }
    else{
      this.logout();
      return null;
    }
   }

   //get user role

   public getRole(){
    let user = this.getUser();

    return user.authorities[0].authority;
   }

   //get user by id
   public getUserById(id:any){
    return this.http.get(`${baseUrl}/user/user_id/${id}`)
   }


}
