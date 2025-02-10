import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';

// prime
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-restablecer',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ButtonComponent
  ],
  templateUrl: './login-restablecer.component.html',
  styleUrls: ['./login-restablecer.component.scss']
})
export class LoginRestablecerComponent {
  resetForm: FormGroup;
  errorMessage: string = '';
  submitted: boolean = false;
  private errorTimeout: any; // Variable para almacenar el timeout

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]] // Validaciones
    });
  }

  onSubmit() {
    this.submitted = true; // Marcar que se ha intentado enviar el formulario

    const emailControl = this.resetForm.get('email');
    if (emailControl?.invalid) {
      this.errorMessage = this.getErrorMessage();

      // Limpiar el mensaje de error después de 1500 ms
      if (this.errorTimeout) {
        clearTimeout(this.errorTimeout); // Cancelar el timeout anterior si existe
      }
      this.errorTimeout = setTimeout(() => {
        this.errorMessage = ''; // Limpiar el mensaje de error
      }, 1500);

      return;
    }

    this.errorMessage = '';
    this.router.navigate(['/login-restablecer-1']);
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
}
