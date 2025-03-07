import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../infrastructure/core/service/auth.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.scss']
})
export class RestablecerComponent {
  resetForm: FormGroup;
  imgGrhLogo: string = environment.imgGrhLogo;
  dataLogo: string = environment.dataLogo;
  showError: boolean = false;
  errorMessage: string = '';
  private errorTimeout: any;
  token: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  hasMinLength: boolean = false;
  hasUppercase: boolean = false;
  hasLowercase: boolean = false;
  hasNumber: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.resetForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });

    this.route.queryParams.subscribe(params => {
      if (params['token']) {
        this.token = params['token'];
      }
    });

    this.resetForm.get('newPassword')?.valueChanges.subscribe(value => {
      this.validatePassword(value);
    });
  }

  validatePassword(password: string) {
    this.hasMinLength = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasNumber = /\d/.test(password);
  }

  onSubmit() {
    if (this.resetForm.invalid) {
      this.showErrorMessage('Todos los campos son obligatorios.');
      return;
    }

    const { newPassword, confirmPassword } = this.resetForm.value;

    if (!this.hasMinLength || !this.hasUppercase || !this.hasLowercase || !this.hasNumber) {
      this.showErrorMessage('La contraseña no cumple con los requisitos.');
      return;
    }

    if (newPassword !== confirmPassword) {
      this.showErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    if (!this.token) {
      this.showErrorMessage('Token inválido o expirado.');
      return;
    }

    const payload = {
      token: this.token,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    };

    this.authService.resetPassword(payload).subscribe({
      next: () => {
        console.log('✅ Contraseña restablecida con éxito.');
        this.router.navigate(['/confi-contra']);
      },
      error: (err) => {
        console.error('❌ Error al restablecer la contraseña:', err);
        this.showErrorMessage('No se pudo restablecer la contraseña. Inténtalo de nuevo.');
      }
    });
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }

  private showErrorMessage(message: string) {
    this.errorMessage = message;
    this.showError = true;

    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }

    this.errorTimeout = setTimeout(() => {
      this.showError = false;
      this.errorMessage = '';
    }, 2000);
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
}
