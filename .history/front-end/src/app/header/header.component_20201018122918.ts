import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  logoutMessage = '';
  constructor(
    public auth: AuthService,
    private router: Router
  ) { }


  logoutUser(): void {
    this.auth.logout()
    this.logoutMessage = 'You are logged out';
    setTimeout(() => {
      this.logoutMessage = '';
      this.router.navigate(['/auth']);
    }, 3000);
  }
}
