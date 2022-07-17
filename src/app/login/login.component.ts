import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInformation } from '../data/user';
import {UserService} from '../data/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

   showPassword:boolean = false;
   UserValidation:boolean = true;
   PasswordValidation:boolean = true;
   userInfor :UserInformation ={
    user:'',
    password:'',
    success:false
   }
  constructor(private router:Router,private userservice :UserService) { }

  ngOnInit(): void {
    
  }

  togglePasswordShow(){
    this.showPassword = !this.showPassword;
  }

  onSubmit(form:NgForm){
    console.log('onSubmit ',JSON.stringify(this.userInfor));
    // this.UserValidation = !this.UserValidation;
    var success:boolean = this.userservice.Login(this.userInfor)
    if(success)
    {
      this.router.navigate(['/Home'])
    }
   
    this.PasswordValidation = false;
}
}
