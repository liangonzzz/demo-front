import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.scss'
})
export class BienvenidoComponent implements OnInit {
  currentDate = new Date(); // Fecha actual
  userFirstName: string = ''; // Primer nombre
  userLastName: string = '';  // Primer apellido

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {

    this.userFirstName = 'Super';
    this.userLastName = 'Administrador';

    // Cuando tengas el backend, será algo como:
    // this.authService.getUserData().subscribe(data => {
    //   this.userFirstName = data.first_name;
    //   this.userLastName = data.last_name;
    // });
  }

  // Tu método de fecha, sin cambios
  getFormattedDate(): string {
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const month = months[this.currentDate.getMonth()];
    const day = this.currentDate.getDate().toString().padStart(2, '0');
    const year = this.currentDate.getFullYear();
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day} de ${year}`;
  }
}
