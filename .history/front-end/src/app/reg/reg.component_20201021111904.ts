import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  waitingToCompleting = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {

  }

  signUp(): void {
    this.waitingToCompleting = true;
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };

    this.auth.registerUser(user)
      .subscribe(data => {
        if (!data.success) {
          this.waitingToCompleting = false;
          this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });

        } else {
          this.waitingToCompleting = false;
          this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          setTimeout(() => {
            this.router.navigate(['/auth'])
          }, 3200);
        }
      });
  }

}
