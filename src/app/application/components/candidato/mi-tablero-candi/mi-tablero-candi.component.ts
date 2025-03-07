import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-tablero-candi',
  templateUrl: './mi-tablero-candi.component.html',
  styleUrls: ['./mi-tablero-candi.component.scss']
})
export class MiTableroCandiComponent {
  currentDate = new Date();
  notificationsCount: number = 25;
  assignmentsCount: number = 13;
  value: number = 75;

  updateProgress(newValue: number) {
    this.value = newValue;
  }

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
