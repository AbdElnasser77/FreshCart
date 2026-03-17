import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-not-found',
  imports: [Navbar, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {

}
