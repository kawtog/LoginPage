import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')])),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(null, Validators.compose([Validators.required])),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('',  Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(20),this.noWhitespaceValidator, Validators.pattern("((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})")])),
      confirmPassword: new FormControl('', Validators.required)
    },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );


  }
    noWhitespaceValidator(control: FormControl) {
    const isSpace = (control.value || '').match(/\s/g);
    return isSpace ? {'whitespace': true} : null;
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
