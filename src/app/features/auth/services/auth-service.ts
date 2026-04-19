import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseURL = environment.BaseURL;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private _isLoggedIn: boolean = false;

  constructor() {
    this.updateAuthState();
  }

  updateAuthState() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this._isLoggedIn = !!token;
      if(!token) this.router.navigate(['/login']);
    }
  }
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  SignIn(data: SignInData): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/signin`, data);
  }

  SignUp(data: SignUpData): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/signup`, data);
  }

  LogOut() {
    localStorage.clear();
  }
}
