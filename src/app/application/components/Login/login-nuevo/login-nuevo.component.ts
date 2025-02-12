import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { environment } from '../../../../../environments/environment';

import { validateForm } from '../../..//../domain/services/validate-form/validate-form';

// prime


@Component({
  selector: 'app-login-nuevo',
  templateUrl: './login-nuevo.component.html',
  styleUrl: './login-nuevo.component.scss'
})
export class LoginNuevoComponent implements OnInit {
  loginForm!: FormGroup;
  showError: boolean = false; // Controla la visibilidad del mensaje de error
  imgLogo: string = environment.imgLogo;
  private errorTimeout: any; // Almacena el timeout para el mensaje de error

  constructor(private router: Router, private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      documentNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  getFormValidationErrors() {
    const errors: any = {};
    Object.keys(this.loginForm.controls).forEach((key) => {
      const controlErrors = this.loginForm.get(key)?.errors;
      if (controlErrors) {
        errors[key] = controlErrors;
      }
    });
    return errors;
  }

  onSubmit() {
   
    if (this.loginForm.valid) {
      this.router.navigate(['/login-restablecer']); // Navega al siguiente componente
    } else {
      validateForm(this.loginForm);
    }
  }
}