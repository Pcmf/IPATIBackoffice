import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  constructor(
   private router: Router,
   private loginService: LoginService) { }


  signin(credenciais) {
      console.log(JSON.stringify(credenciais));
      this.loginService.login(credenciais)
      .subscribe( result => {
          if (result) {
            this.router.navigate(['/']);
          } else {
            this.invalidLogin = true;
          }
        });
  }

}
