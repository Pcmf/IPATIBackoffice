import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {catchError, map } from 'rxjs/operators';
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
             console.log(response.status);
             let result = response._body;
            if ( result ) {
              localStorage.setItem('token', result);
              return true;
            } else {
              return false;
            }
        })

        );
  }

  logout() {
  }

  isLoggedIn() {
  }
}
