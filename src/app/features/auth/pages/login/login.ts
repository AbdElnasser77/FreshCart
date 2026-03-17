import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientSideValidation } from "../../components/client-side-validation/client-side-validation";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ClientSideValidation],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email:['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
  })

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm);
      console.log(this.loginForm.value);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
