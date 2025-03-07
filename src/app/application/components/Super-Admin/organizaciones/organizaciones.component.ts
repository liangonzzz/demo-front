import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrl: './organizaciones.component.scss'
})
export class OrganizacionesComponent implements OnInit {
  @Input() isSidebarExpanded: boolean = false;

  // Propiedades para la ordenación
  sortField: string = '';
  sortOrder: number = 1;

  // Nueva propiedad para el término de búsqueda
  searchTerm: string = '';

  // Arreglo original y filtrado
  organizations: any[] = [
    {
      logo: '../../assets/images/datalogo.png',
      company_name: 'DataCenter',
      phone: '123456789',
      email: 'contact@datacenter.com',
      admin: 'Andrés Hernández',
      collaborators: 150,
      candidates: 14
    },
    {
      logo: '../../assets/images/gelsalogo.png',
      company_name: 'Gelsa',
      phone: '987654321',
      email: 'info@gelsa.com',
      admin: 'David Gómez',
      collaborators: 150,
      candidates: 25
    },
    {
      logo: '../../assets/images/pagatodo.png',
      company_name: 'PagaTodo',
      phone: '456789123',
      email: 'soporte@pagatodo.com',
      admin: 'Pedro Ramírez',
      collaborators: 150,
      candidates: 10
    },
    {
      logo: '../../assets/images/Ubisoft_logo1.svg',
      company_name: 'Ubisoft',
      phone: '321654987',
      email: 'support@ubisoft.com',
      admin: 'Carlos Mendoza',
      collaborators: 150,
      candidates: 18
    },
    {
      logo: '../../assets/images/youtube.png',
      company_name: 'YouTube',
      phone: '654321987',
      email: 'contact@youtube.com',
      admin: 'Sofía López',
      collaborators: 150,
      candidates: 12
    },
    {
      logo: '../../assets/images/Ubisoft_logo1.svg',
      company_name: 'Ubisoft',
      phone: '321654987',
      email: 'support@ubisoft.com',
      admin: 'Carlos Mendoza',
      collaborators: 150,
      candidates: 18
    },
    {
      logo: '../../assets/images/youtube.png',
      company_name: 'YouTube',
      phone: '654321987',
      email: 'contact@youtube.com',
      admin: 'Sofía López',
      collaborators: 150,
      candidates: 12
    }
  ];

  filteredOrganizations: any[] = [...this.organizations]; // Copia del arreglo original
  paginatedOrganizations: any[] = [];
  first: number = 0;
  rows: number = 5;
  totalRecords: number = 0;

  ngOnInit(): void {
    this.totalRecords = this.organizations.length;
    this.updatePaginatedOrganizations();
  }

  // Método para capturar el valor del input
  onGlobalFilter(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  // Método para realizar la búsqueda al hacer clic en el botón
  search(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredOrganizations = [...this.organizations];
    } else {
      this.filteredOrganizations = this.organizations.filter(org =>
        org.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.first = 0; // Resetear la paginación a la primera página
    this.totalRecords = this.filteredOrganizations.length;
    this.updatePaginatedOrganizations();
  }

  sort(field: string) {
    if (this.sortField === field) {
      this.sortOrder = -this.sortOrder;
    } else {
      this.sortField = field;
      this.sortOrder = 1;
    }
    this.updateSort();
    this.updatePaginatedOrganizations();
  }

  private updateSort() {
    this.filteredOrganizations.sort((a, b) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * this.sortOrder;
      }
      return (valueA - valueB) * this.sortOrder;
    });
  }

  toggleOrganization(org: any): void {
    org.isActive = !org.isActive;
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedOrganizations();
  }

  private updatePaginatedOrganizations(): void {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedOrganizations = this.filteredOrganizations.slice(start, end);
  }
}
