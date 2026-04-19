import { FloatLabelModule } from 'primeng/floatlabel';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientSideValidation } from '../../components/client-side-validation/client-side-validation';
import { AuthService } from '../../services/auth-service';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ClientSideValidation,
    MessageModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  messageService = inject(MessageService);
  formSubmitted: boolean = false;
  registerForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        ],
      ],
      rePassword: ['', [Validators.required]],
    },
    { validators: this.passwordMatchValidator },
  );

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value == control.get('rePassword')?.value
      ? null
      : { missmatch: true };
  }
  register() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.getRawValue());
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form Submitted',
        life: 3000,
      });

      this.formSubmitted = false;
      this.authService.SignUp(this.registerForm.getRawValue()).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.authService.updateAuthState();
          this.registerForm.reset();
          this.router.navigate(['/products'])
        },
      });
    }
  }

  isInvalid(controlName: string) {
    const control = this.registerForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
