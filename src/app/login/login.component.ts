import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  state: any;
  constructor(
   private router: Router,
   private loginService: LoginService,
   private navbarService: NavbarService) {

  this.navbarService.navstate$.subscribe(
      (state) => this.state = state);
  }

  signin(credenciais) {
      this.loginService.login(credenciais)
        .subscribe( result => {
            if (result) {
              this.navbarService = this.state;
              if (!this.state.change) {
                this.router.navigate(['/']);
              } else {
                this.router.navigate(['/change']);
              }
            } else {
              this.invalidLogin = true;
            }
        });
  }

}
