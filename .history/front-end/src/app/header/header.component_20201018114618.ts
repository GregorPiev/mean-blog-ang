import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  resultMessage = '';
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logoutUser() {
    this.auth.logout()
    this.resultMessage = 'logout';

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000);
  }
}
