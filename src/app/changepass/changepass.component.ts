import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  private invalid2Pass = false;
  private erro = false;
  private u = {};
  private newData: any;
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.getUserData().subscribe(resp => {
      this.u = resp;
      console.log( this.u );
    });

  }

  ngOnInit() {
  }

changePass(form) {
  if (form.pass1 === form.pass2) {
    this.invalid2Pass = false;
    // console.log(form.pass2);
    this.newData = {newpass: form.pass1, token: localStorage.getItem('token')};
    this.loginService.changePassDB (this.newData);
    // console.log(chg);
    /* if (this.loginService.changePassDB(form.pass1)) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } else {
      this.erro = true;
    } */

  } else {
    this.invalid2Pass = true;
  }
}

}
