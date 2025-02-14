import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-confi-correo',
  templateUrl: './confi-correo.component.html',
  styleUrl: './confi-correo.component.scss'
})
export class ConfiCorreoComponent {
  imgGrhLogo: string = environment.imgGrhLogo;

  constructor(private router: Router) {}
  redirectToLogin() {
    this.router.navigate(['/login-principal']);
  }
}

