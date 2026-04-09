import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseURL = environment.BaseURL;
  private _isloggedIn: boolean = false;

  constructor() {
    if (localStorage.getItem('token')) {
      this._isloggedIn = !!localStorage.getItem('token');
    }
  }

  get isLoggedIn(): boolean {
    return this._isloggedIn;
  }

  SignIn(data: SignInData): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/signin`, data);
  }

  SignUp(data: SignUpData): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/signup`, data);
  }
}
