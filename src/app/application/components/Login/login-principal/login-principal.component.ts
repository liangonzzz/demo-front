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
  selector: 'app-login-principal',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ButtonComponent
  ],
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.scss']
})
export class LoginPrincipalComponent {
  loginForm: FormGroup;
  showError: boolean = false; // Controla la visibilidad del mensaje de error
  private errorTimeout: any; // Almacena el timeout para el mensaje de error

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      documentNumber: ['', Validators.required], // Campo obligatorio
      password: ['', Validators.required] // Campo obligatorio
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
      this.router.navigate(['/pantalla-creacion']); // Navega al siguiente componente
    }
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/login-restablecer']);
  }

}
