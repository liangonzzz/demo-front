import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.scss'
})
export class ConfirmarComponent {

  imgGrhLogo: string = environment.imgGrhLogo;
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
    this.router.navigate(['/login-restablecer']);
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

