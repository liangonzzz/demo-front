import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginNuevoComponent } from './application/components/Login/login-nuevo/login-nuevo.component';
import { RestablecerComponent } from './application/components/Login/restablecer/restablecer.component';
import { ConfirmarComponent } from './application/components/Login/confirmar/confirmar.component';
import { ConfiContraComponent } from './application/components/Login/confi-contra/confi-contra.component';
import { ConfiCorreoComponent } from './application/components/Login/confi-correo/confi-correo.component';
import { PantallaSuperAdminComponent } from './application/components/Super-Admin/pantalla-super-admin/pantalla-super-admin.component';
import { OrganizacionesComponent } from './application/components/Super-Admin/organizaciones/organizaciones.component';
import { MiTableroComponent } from './application/components/Super-Admin/mi-tablero/mi-tablero.component';
import { FormularioComponent } from './application/components/Super-Admin/formulario/formulario.component';





const routes: Routes = [
  { path: 'login-nuevo', component: LoginNuevoComponent },
  { path: 'restablecer', component: RestablecerComponent },
  { path: 'confirmar', component: ConfirmarComponent },
  { path: 'confi-contra', component: ConfiContraComponent },
  { path: 'confi-correo', component: ConfiCorreoComponent },
  { path: 'Superadmin', component: PantallaSuperAdminComponent },
  { path: 'organizaciones', component: OrganizacionesComponent },
  { path: 'mi-tablero', component: MiTableroComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/login-nuevo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
