import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla-super-admin',
  templateUrl: './pantalla-super-admin.component.html',
  styleUrls: ['./pantalla-super-admin.component.scss']
})
export class PantallaSuperAdminComponent {
  isSidebarExpanded = false;
  selectedMenu = 0;

  onSidebarStateChange(event: { isOpen: boolean, selectedIndex: number | null }) {
    this.isSidebarExpanded = event.isOpen;
    // Si selectedIndex es 0, muestra "Mi tablero"; si es 1, muestra "Organizaciones"
    if (event.selectedIndex !== null) {
      this.selectedMenu = event.selectedIndex;
    }
  }
}
