import { Injectable } from '@angular/core';
import { UserInformation } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:UserInformation={
    user:'',
    password:'',
    success:false
  }
  constructor() { }

  AllowtoWeb(){

  return this.user.success
  }

  Login(user:UserInformation){
    
    /// query data 

    //true
    this.user = user;
    this.user.success= true;

    return true;
  }
  Logout(){
    this.user ={   user:'',
    password:'',
    success:false};
  }
}
