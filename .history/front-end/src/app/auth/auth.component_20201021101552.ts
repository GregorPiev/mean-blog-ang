import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login: string;
  password: string;
  waitingToCompleting = false;


  constructor(
    private auth: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void { }

  signIn(): void {
    const user = {
      login: this.login,
      password: this.password,
    };

    this.auth.authUser(user)
      .subscribe(data => {
        if (!data.success) {
          this.waitingToCompleting = false;
          this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });

        } else {
          this.waitingToCompleting = false;
          this.auth.storeUser(data.token, data.user);
          this.login = '';
          this.password = '';
          this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 3200);
        }
      });
  }
}
