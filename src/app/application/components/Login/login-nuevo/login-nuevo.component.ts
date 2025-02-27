import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { validateForm } from '../../../../domain/services/validate-form/validate-form';
import { AuthService } from '../../../../infrastructure/core/service/auth.service';

@Component({
  selector: 'app-login-nuevo',
  templateUrl: './login-nuevo.component.html',
  styleUrl: './login-nuevo.component.scss'
})
export class LoginNuevoComponent implements OnInit {
  loginForm!: FormGroup;
  showError: boolean = false;
  errorMessage: string = '';
  imgGrhLogo: string = environment.imgGrhLogo;
  dataLogo: string = environment.dataLogo;
  showPassword: boolean = false;

  private errorTimeout: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      documentNumber: ['', Validators.required],
      password: ['', Validators.required],
      politicaSeguridad: [false, Validators.requiredTrue],
      datosPersonales: [false, Validators.requiredTrue],
      canalDigital: [false, Validators.requiredTrue]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // Verificar si los checkboxes están marcados
    if (!this.areCheckboxesChecked()) {
      this.showErrorMessage('Debe aceptar todas las políticas para continuar');
      return;
    }

    // Verificar si los campos están completos
    if (!this.loginForm.get('documentNumber')?.value || !this.loginForm.get('password')?.value) {
      this.showErrorMessage('Por favor complete todos los campos');
      return;
    }

    const credentials = {
      documentNumber: this.loginForm.get('documentNumber')?.value,
      password: this.loginForm.get('password')?.value
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/Superadmin']);
      },
      error: (error) => {
        console.error('Error en el login:', error);
        this.showErrorMessage('Usuario o contraseña incorrectos');
      }
    });
  }

  private areCheckboxesChecked(): boolean {
    return this.loginForm.get('politicaSeguridad')?.value &&
      this.loginForm.get('datosPersonales')?.value &&
      this.loginForm.get('canalDigital')?.value;
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
      this.cdr.detectChanges();
    }, 1500);
  }

  navigateToLoginRestablecer() {
    this.router.navigate(['/confirmar']);
  }
}
