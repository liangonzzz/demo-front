import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-confi-contra',
  templateUrl: './confi-contra.component.html',
  styleUrl: './confi-contra.component.scss'
})
export class ConfiContraComponent {

  imgGrhLogo: string = environment.imgGrhLogo;

  constructor(private router: Router) {}
  redirectToLogin() {
    this.router.navigate(['/login-principal']);
  }
}
