import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../../features/auth/services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Input() layout: string | null = null;

  isMobileOpen: boolean = true;
  isLoggedIn: boolean | null = null;

  private authService = inject(AuthService);

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.LogOut();
  }
  NavToggle() {
    this.isMobileOpen = !this.isMobileOpen;
  }
}