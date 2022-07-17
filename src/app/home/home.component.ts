import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../data/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userservice.AllowtoWeb()) {
      this.router.navigate(['/Do_not_Allow'])
    }
  }
  Logout() {
    this.userservice.Logout()
    this.router.navigate(['/Login'])
  }

}
