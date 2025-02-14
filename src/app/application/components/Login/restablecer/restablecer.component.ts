import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrl: './restablecer.component.scss'
})
export class RestablecerComponent {

  imgGrhLogo: string = environment.imgGrhLogo;
  loginForm: FormGroup;
  showError: boolean = false; // Controla la visibilidad del mensaje de error
  private errorTimeout: any; // Almacena el timeout para el mensaje de error

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      password: ['', Validators.required], // Campo obligatorio
      passwordConfirm: ['', Validators.required] // Campo obligatorio
    });
  }

  onSubmit() {
    // Verifica si los campos están vacíos
    if (this.loginForm.invalid) {
      this.showError = true; // Muestra el mensaje de error

      // Cancela el timeout anterior si existe
      if (this.errorTimeout) {
        clearTimeout(this.errorTimeout);
      }

      // Oculta el mensaje de error después de 1500 ms
      this.errorTimeout = setTimeout(() => {
        this.showError = false;
      }, 1500);
    } else {
      this.showError = false; // Oculta el mensaje de error
      this.router.navigate(['/login-principal']); // Navega al siguiente componente
    }
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }

}
