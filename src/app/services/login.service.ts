import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  login (credenciais) {
    console.log(JSON.stringify(credenciais));
   // return this.http.post('/auth',
    //    JSON.stringify(credenciais));
  }

  logout() {
  }

  isLoggedIn() {
  }
}
