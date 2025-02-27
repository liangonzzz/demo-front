import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8085'; // Base URL del backend

  constructor(private http: HttpClient) { }

  /** Método para iniciar sesión */
  login(credentials: { documentNumber: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Guarda el token en localStorage
        }
      })
    );
  }

  /** Método para registrar un usuario */
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/users/register`, userData);
  }

  /** Método para solicitar el correo de recuperación de contraseña */
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, { email }, { responseType: 'text' }).pipe(
      tap(response => console.log('🟢 Respuesta del backend:', response)),
      catchError(error => {
        console.error('❌ Error en forgotPassword:', error);
        return throwError(() => error);
      })
    );
  }

  /** Método para actualizar la contraseña */
  updatePassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/password/update`, { token, newPassword });
  }

  /** Método para restablecer la contraseña con el token */
  resetPassword(payload: { token: string, newPassword: string, confirmPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, payload, { responseType: 'text' }).pipe(
      tap(response => {
        console.log('✅ Respuesta del backend:', response);

        // Si la respuesta es un texto vacío o no es un string, considerarlo un error
        if (!response || typeof response !== 'string') {
          throw new Error('⚠️ Respuesta inesperada del servidor.');
        }
      }),
      catchError(error => {
        console.error('❌ Error en resetPassword:', error);

        if (error.status === 200) {
          console.warn('⚠️ El servidor devolvió 200 pero con un error en el cuerpo.');
          return throwError(() => new Error('Hubo un problema al procesar la solicitud. Intenta nuevamente.'));
        }

        return throwError(() => new Error('No se pudo restablecer la contraseña. Verifica el token y vuelve a intentarlo.'));
      })
    );
  }

  /** Método para cerrar sesión */
  logout(): void {
    localStorage.removeItem('token'); // Elimina el token
  }

  /** Método para obtener el token */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /** Método para verificar si el usuario está autenticado */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
