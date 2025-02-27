import { Component } from '@angular/core';

// Interfaz para los datos de las organizaciones
interface Organization {
  id: number;
  name: string;
  logo: string;
  phone: string;
  email: string;
  employees: number;
  candidates: number;
}

@Component({
  selector: 'app-mi-tablero',
  templateUrl: './mi-tablero.component.html',
  styleUrl: './mi-tablero.component.scss'
})
export class MiTableroComponent {

  currentDate = new Date(); // Fecha actual

  // Datos de las organizaciones (simulando una base de datos)
  organizations: Organization[] = [
    {
      id: 1,
      name: 'DataCenter',
      logo: '../../assets/images/datalogo.png',
      phone: '123456789',
      email: 'exemple@gmail.com',
      employees: 542,
      candidates: 14
    },
    {
      id: 2,
      name: 'Gelsa',
      logo: '../../assets/images/gelsalogo.png', // Cambia la ruta según corresponda
      phone: '987654321',
      email: 'exemple@gmail.com',
      employees: 300,
      candidates: 25
    },
    {
      id: 3,
      name: 'PagaTodo',
      logo: '../../assets/images/pagatodo.png', // Cambia la ruta según corresponda
      phone: '456789123',
      email: 'exemple@gmail.com',
      employees: 150,
      candidates: 10
    },
    {
      id: 4,
      name: 'Ubisof',
      logo: '../../assets/images/Ubisoft_logo1.svg', // Cambia la ruta según corresponda
      phone: '321654987',
      email: 'exemple@gmail.com',
      employees: 200,
      candidates: 18
    },
    {
      id: 5,
      name: 'Youtube',
      logo: '../../assets/images/youtube.png', // Cambia la ruta según corresponda
      phone: '654321987',
      email: 'exemple@gmail.com',
      employees: 180,
      candidates: 12
    }
  ];

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

  onAddOrganization() {
    console.log('Botón "Agregar organización" clicado');
    // Aquí puedes añadir lógica para agregar una nueva organización al arreglo
  }

  onEditOrganization(orgId: number) {
    console.log(`Botón "Editar" clicado para organización con ID: ${orgId}`);
    // Lógica para editar la organización específica aquí
  }

  onViewAllOrganizations() {
    console.log('Botón "Ver todas las organizaciones" clicado');
    // Lógica para ver todas las organizaciones aquí
  }
}
