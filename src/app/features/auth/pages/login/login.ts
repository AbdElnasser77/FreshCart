import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientSideValidation } from "../../components/client-side-validation/client-side-validation";
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ClientSideValidation],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  loginForm = this.fb.group({
    email:['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
  })

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm);
      console.log(this.loginForm.value);
      this.authService.SignIn(this.loginForm.getRawValue()).subscribe({
        next:(res) => {
          console.log(res);
          localStorage.setItem('token',res.token);
          this.authService.updateAuthState();
          this.router.navigate(['./products']);
        }
      })
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
