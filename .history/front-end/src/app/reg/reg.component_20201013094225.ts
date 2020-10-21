import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

  signUp(event): void {
    event.preventDefault();
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };
    console.log('Submit Work:', user);
  }

}
