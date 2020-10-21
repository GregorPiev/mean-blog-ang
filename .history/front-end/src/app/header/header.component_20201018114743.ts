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
  resultMessage = '';
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }


  logoutUser(): void {
    this.auth.logout()
    this.resultMessage = 'You are logged out';
    setTimeout(() => {
      this.router.navigate(['/auth']);
    }, 3000);
  }
}
