import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(evn) {
    evn.preventDefault();
    console.log('Submit Work')
  }

}
