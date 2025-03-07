import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
    // Porcentaje para mostrar en el círculo y en la barra de progreso
    porcentajeProgreso: number = 75;
}
