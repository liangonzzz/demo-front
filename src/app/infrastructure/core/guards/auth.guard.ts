import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;  // Permite el acceso si está autenticado
    } else {
      this.router.navigate(['/login-principal']);  // Redirige si no está autenticado
      return false;  // Bloquea el acceso
    }
  }
}
