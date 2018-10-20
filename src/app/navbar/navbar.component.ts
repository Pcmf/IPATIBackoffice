import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  private loginName: any;
  constructor(private loginService: LoginService, private navService: NavbarService) {
    this.navService.navstate$.subscribe( (state) => this.loginName = state.nome );
  }
   logout () {
     localStorage.removeItem('token');
   }


}
