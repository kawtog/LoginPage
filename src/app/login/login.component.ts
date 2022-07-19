import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators,FormGroup, FormControl } from '@angular/forms';
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
   userInfor :UserInformation =new UserInformation();
   loginform!: FormGroup;
  constructor(private router:Router,private userservice :UserService,private formBuilder:FormBuilder) {

    this.loginform =this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')])),
      password: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9@!?]*')]))
    })
   }

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
