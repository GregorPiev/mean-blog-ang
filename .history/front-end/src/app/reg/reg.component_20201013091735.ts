import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  name = '';
  login = '';
  email = '';
  password = '';
  constructor() { }

  ngOnInit(): void {
  }

  signUp(event) {
    event.preventDefault();
    console.log('Submit Work')
  }

}
