import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  isMobileOpen:boolean = true;

  NavToggle(){
    this.isMobileOpen = !this.isMobileOpen;
  }
}
