import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'client-side-validation',
  imports: [],
  templateUrl: './client-side-validation.html',
  styleUrl: './client-side-validation.scss',
})
export class ClientSideValidation {
@Input() control!:AbstractControl | null;

}
