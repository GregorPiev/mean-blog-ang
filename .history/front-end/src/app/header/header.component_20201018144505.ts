import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  logoutMessage = '';
  getToken: string;
  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated().subscribe(item => {
      this.getToken = item;
    });
  }

  logoutUser(): void {
    this.auth.logout()
    this.logoutMessage = 'You are logged out';
    setTimeout(() => {
      this.logoutMessage = '';
      this.router.navigate(['/auth']);
    }, 3000);
  }
}
