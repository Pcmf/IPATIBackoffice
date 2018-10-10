import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginName = 'Login';
  constructor(private loginService: LoginService) {
    if ( this.loginService.isLoggedIn() ) {
      this.loginName = 'Logout';
    }
   }

  ngOnInit() {
  }

}
