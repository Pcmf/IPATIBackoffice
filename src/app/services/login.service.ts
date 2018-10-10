import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  login (credenciais) {
    return this.http.post('http://localhost/ipatimupRest/auth',
        JSON.stringify(credenciais))
        .pipe(
          map(response => {
      //       console.log(response._body);
        //     let result = response._body;
            if ( response._body ) {
              localStorage.setItem('token', response._body);
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
      let helper = new JwtHelperService;
      let token = localStorage.getItem('token');
      let decToken = helper.decodeToken(token);
      
      if ( helper.decodeToken(token) ) {
        console.log(decToken.iss);
        return true;
      }
       return false;
  }
}
