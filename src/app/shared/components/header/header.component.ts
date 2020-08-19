import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isSignIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  urlRoute(url: string = '') {
    this.router.navigate([url]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
