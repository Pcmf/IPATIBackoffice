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
  private helper = new JwtHelperService;

  constructor(private loginService: LoginService, private navService: NavbarService) {

    if (localStorage.getItem('token') !== null) {
      this.loginName = this.helper.decodeToken(localStorage.getItem('token')).nome;
    } else {
      this.navService.navstate$.subscribe((state: any) => this.loginName = state.nome);
    }

    // this.navService.navstate$.subscribe( (state: any) => this.loginName = state.nome );
  }

  logout () {
     localStorage.removeItem('token');
   }


}
