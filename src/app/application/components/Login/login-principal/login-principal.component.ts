import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { validateForm } from '../../../../domain/services/validate-form/validate-form';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrl: './login-principal.component.scss'
})
export class LoginPrincipalComponent {

  loginForm!: FormGroup;
  imgGrhLogo: string = environment.imgGrhLogo;

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
      this.router.navigate(['/login-restablecer']);
    } else {
      validateForm(this.loginForm);
    }
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/confirmar']);
  }
}
