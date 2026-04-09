import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { ClientSideValidation } from "../../components/client-side-validation/client-side-validation";
import { AuthService } from '../../services/auth-service';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ClientSideValidation],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    email:['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    rePassword:['',[Validators.required]],
  },{validators:this.passwordMatchValidator})

  passwordMatchValidator(control: AbstractControl){
    return control.get('password')?.value == control.get('rePassword')?.value ? null : {missmatch : true};
  }
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.authService.SignUp(this.registerForm.getRawValue()).subscribe({
        next:(res)=>{
          console.log(res);
          localStorage.setItem('token',res.token);
        }
      })
    }else{
      this.registerForm.markAllAsTouched();
    }
  }
}
