import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  organizationForm: FormGroup;
  adminOptions = [
    { name: 'Usuario 1', value: 'user1' },
    { name: 'Usuario 2', value: 'user2' }
  ];

  // Si planeas usar sidebar-expanded, define esta propiedad
  isSidebarExpanded: boolean = false;

  constructor(private fb: FormBuilder) {
    this.organizationForm = this.fb.group({
      businessName: ['', Validators.required],
      description: ['', Validators.required],
      nit: ['', Validators.required],
      rut: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      admin: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.organizationForm.valid) {
      console.log('Formulario enviado:', this.organizationForm.value);
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos requeridos.');
    }
  }

  onUpload(event: any) {
    console.log('Archivo subido:', event.files);
  }
}
