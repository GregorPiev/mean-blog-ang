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

    this.auth.registerUser(user)
      .subscribe(data => {
        this.resultMessage = data.msg;
        if (!data.success) {
          this.router.navigate(['/reg'])
        } else {
          setTimeout(() => {
            this.router.navigate(['/auth'])
          }, 3000);
        }
      });
  }
}
