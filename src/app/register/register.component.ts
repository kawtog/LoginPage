import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserInformation } from '../data/user';
import Validation from './Validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  submitted = false;
  reactiveform!: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.reactiveform = this.formbuilder.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(null,Validators.compose([Validators.required])),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
   {
    validators: [Validation.match('password', 'confirmPassword')]
   }
    );


  }

  ngOnInit(): void {

  }
  togglePasswordShow() {
    this.showPassword = !this.showPassword;
  }
  get f() {
    return this.reactiveform.controls;
  }
  onSubmit() {
console.log('onSubmit')
    this.submitted = true;
    // stop here if form is invalid
    if (this.reactiveform.invalid) {
      console.log(' invalid')
      return;
    }
    console.log(JSON.stringify(this.reactiveform.value, null, 2));
    console.log(JSON.stringify(this.reactiveform.value));
  }





}
