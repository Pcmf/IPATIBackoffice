import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { NavbarService } from './navbar.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http, private navbarService: NavbarService) { }
  private helper = new JwtHelperService;

  login (credenciais) {
    return this.http.post('http://localhost/ipatimupRest/auth',
        JSON.stringify(credenciais))
        .pipe(
          map(response => {
            if ( response._body ) {
              localStorage.setItem('token', response._body);
              //
              this.navbarService.setNavState(this.helper.decodeToken(response._body));
              return true;
            } else {
              return false;
            }
        })

        );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
      const token = localStorage.getItem('token');
      if ( token && this.helper.isTokenExpired(token)) {
        return true;
      } else {
        return false;
      }
  }

  changePassDB (credenciais) {
     return this.http.post('http://localhost/ipatimupRest/change',
        JSON.stringify(credenciais))
        .pipe(
          map(response => {
            if ( response._body ) {
              localStorage.setItem('token', response._body);
              //
              this.navbarService.setNavState(this.helper.decodeToken(response._body).nome);
              return true;
            } else {
              return false;
            }
          })
        );
  }
}
