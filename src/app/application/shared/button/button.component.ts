import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Importa el módulo de PrimeNG

@Component({
  selector: 'app-button',
 
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
 
})
export class ButtonComponent {
  @Input() etiqueta!: string;
  @Input() tipo: string = 'button';
}
