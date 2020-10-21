import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  name: string;
  login: string;
  email: string;
  password: string;
  errorMessage: string = '';
  sendSignUp: Observable<any>;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  signUp(): void {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };
    console.log('Submit Work:', user);
    this.sendSignUp = this.auth.registerUser(user)
      .subscribe(data => {
        if (!data.success) {
          this.errorMessage = data.msg;
        } else {

        }
      });
  }

}
