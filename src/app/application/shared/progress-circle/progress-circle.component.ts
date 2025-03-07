import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent {
  @Input() progress: number = 0; // Valor del progreso (porcentaje)
  @Input() title: string = 'Progreso'; // Título personalizable
  @Input() size: number = 200; // Tamaño en píxeles (ancho y alto), por defecto 200px
}
