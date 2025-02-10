import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { environment } from '../../../../../environments/environment';
import { NotificadorErrorInputDirective } from '../../..//../domain/directives/notificador-error-input/notificador-error-input.directive';
import { validateForm } from '../../..//../domain/services/validate-form/validate-form';

// prime
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-nuevo',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ButtonComponent,
    NotificadorErrorInputDirective,

  ],
  templateUrl: './login-nuevo.component.html',
  styleUrl: './login-nuevo.component.scss'
})
export class LoginNuevoComponent {
  loginForm: FormGroup;
  showError: boolean = false; // Controla la visibilidad del mensaje de error
  imgLogo: string = environment.imgLogo;
  private errorTimeout: any; // Almacena el timeout para el mensaje de error

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      documentNumber: ['', Validators.required], // Campo obligatorio
      password: ['', Validators.required] // Campo obligatorio
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
    // Verifica si los campos están vacíos
    validateForm(this.loginForm);
    //console.log('Errores de validación:', this.getFormValidationErrors());
    //(this.loginForm.invalid) {
      //this.showError = true; // Muestra el mensaje de error

      // Cancela el timeout anterior si existe
      //if (this.errorTimeout) {
        //clearTimeout(this.errorTimeout);
      //}

      // Oculta el mensaje de error después de 1500 ms
      //this.errorTimeout = setTimeout(() => {
        //this.showError = false;
      //}, 1500);
    //} else {
      //this.showError = false; // Oculta el mensaje de error
      this.router.navigate(['/login-restablecer']); // Navega al siguiente componente

  }



}
