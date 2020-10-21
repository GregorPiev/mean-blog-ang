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
  resultMessage: string = '';
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

    this.auth.registerUser(user)
      .subscribe(data => {
        this.resultMessage = data.msg;
        setTimeout(() => {
          this.resultMessage = '';
        }, 2000);

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
