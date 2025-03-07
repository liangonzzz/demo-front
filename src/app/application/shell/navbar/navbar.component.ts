import { Component, Input} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  imgGrhLogo: string = environment.imgGrhLogo;
  dataLogo: string = environment.dataLogo;
  fotoPerfil: string = environment.fotoPerfil;

  @Input() isExpanded = false;
  isDropdownOpen = false;
  isLogoutDialogVisible = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  constructor(private router: Router) {}

  onProfileClick() {
    this.router.navigate(['mi-tablero']);
  }

  showLogoutDialog() {
    this.isLogoutDialogVisible = true;
  }

  onLogoutConfirm() {
    this.isLogoutDialogVisible = false;
    this.router.navigate(['/login']);
  }

  onLogoutCancel() {
    this.isLogoutDialogVisible = false;
  }

}

