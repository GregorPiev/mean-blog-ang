import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login: string;
  password: string;
  resultMessage: string = '';
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  signIn(): void {
    const user = {
      login: this.login,
      password: this.password,
    };

    this.auth.authUser(user)
      .subscribe(data => {
        this.resultMessage = data.msg;
        if (data.success) {
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 3000);
          this.auth.storeUser(data.token, data.user);
        }
      });
  }
}
