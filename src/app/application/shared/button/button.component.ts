import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Importa el módulo de PrimeNG

@Component({
  selector: 'app-button',
  standalone: true, // 🔹 IMPORTANTE: Lo hace standalone
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, ButtonModule] // 🔹 Importa lo necesario para este componente
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: string = 'button';
}
