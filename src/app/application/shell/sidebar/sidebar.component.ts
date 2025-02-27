import { Component, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  GRHcorto: string = environment.GRHcorto;

  isSidebarOpen = false;

  // Cambiamos el tipo del evento para incluir el índice seleccionado
  @Output() sidebarStateChange = new EventEmitter<{ isOpen: boolean, selectedIndex: number | null }>();

  menuItems = [
    { name: 'Mi tablero', icon: 'fas fa-home' },
    { name: 'Organizaciones', icon: 'fa fa-industry' },
  ];

  selectedItem: number | null = 0; // Iniciamos con "Mi tablero" seleccionado por defecto

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // Emitimos tanto el estado como el ítem seleccionado
    this.sidebarStateChange.emit({ isOpen: this.isSidebarOpen, selectedIndex: this.selectedItem });
  }

  selectItem(index: number) {
    this.selectedItem = index;
    // Emitimos el evento cada vez que se selecciona un ítem
    this.sidebarStateChange.emit({ isOpen: this.isSidebarOpen, selectedIndex: this.selectedItem });
  }
}
