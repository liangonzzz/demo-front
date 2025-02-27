import { Component, Input} from '@angular/core';
import { environment } from '../../../../environments/environment';

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

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

