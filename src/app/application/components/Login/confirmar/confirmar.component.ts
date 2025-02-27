import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../infrastructure/core/service/auth.service';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.scss'
})
export class ConfirmarComponent {
  dataLogo: string = environment.dataLogo;
  imgGrhLogo: string = environment.imgGrhLogo;
  resetForm: FormGroup;
  errorMessage: string = '';
  submitted: boolean = false;
  private errorTimeout: any; // Variable para almacenar el timeout

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inyectamos AuthService
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]] // Validaciones
    });
  }

  onSubmit() {
    this.submitted = true;
    const emailControl = this.resetForm.get('email');

    if (emailControl?.invalid) {
      this.errorMessage = this.getErrorMessage();
      console.warn('⚠️ Formulario inválido:', this.errorMessage);
      this.setErrorTimeout();
      return;
    }

    const email = emailControl?.value;
    console.log('🟢 Enviando solicitud de recuperación para:', email);

    this.authService.forgotPassword(email).subscribe({
      next: (response) => {
        console.log('✅ Correo enviado correctamente:', response);

        // Verificar si el backend respondió correctamente
        if (response) {
          console.log('⏩ Redirigiendo a /configcorreo...');
          this.router.navigate(['/confi-correo'])
            .then(success => console.log('✅ Redirección exitosa:', success))
            .catch(err => console.error('❌ Error en la redirección:', err));
        } else {
          console.error('❌ Respuesta inesperada del backend:', response);
        }
      },
      error: (err) => {
        console.error('❌ Error al enviar el correo:', err);
        this.errorMessage = 'No se pudo enviar el correo. Inténtalo nuevamente.';
        this.setErrorTimeout();
      }
    });
  }

  navigateToDatateam() {
    this.router.navigate(['/login-principal']);
  }

  getErrorMessage(): string {
    const emailControl = this.resetForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'El correo electrónico es obligatorio';
    }
    if (emailControl?.hasError('email')) {
      return 'Correo electrónico inválido';
    }
    return '';
  }

  private setErrorTimeout() {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }
    this.errorTimeout = setTimeout(() => {
      this.errorMessage = '';
    }, 1500);
  }
}
