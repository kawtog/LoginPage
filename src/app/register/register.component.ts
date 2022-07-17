import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../data/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
