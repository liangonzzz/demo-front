import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-mi-progreso',
  templateUrl: './mi-progreso.component.html',
  styleUrl: './mi-progreso.component.scss'
})
export class MiProgresoComponent {
  fotoPerfil: string = environment.fotoPerfil;
  isSidebarExpanded: boolean = false;

  // Definimos las propiedades del perfil
  perfil = {
    nombre: 'José Rodríguez',
    profesion: 'Candidato a un puesto de Analista de requerimientos y sistemas',
    correo: 'jose.rodriguez@email.com',
    numero: '13213212',
    descripcion: 'Ingeniero de Sistemas con 3 años de experiencia en análisis de requerimientos, diseño de soluciones tecnológicas, excelente en la resolución de problemas, con enfoque en la automatización, proactivo y en la satisfacción del cliente. Enfoque en la mejora operativa.',
    skills: [ 'Excel', 'Automatización', 'adjhd', 'dasdadada', 'dfgdfg']
  };

  onProcessClick(section: string) {
    console.log(`Procesando: ${section}`);
    // Aquí puedes agregar lógica para manejar el clic en "En proceso"
  }
}
