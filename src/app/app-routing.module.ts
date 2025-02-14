import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginNuevoComponent } from './application/components/Login/login-nuevo/login-nuevo.component';
import { LoginPrincipalComponent } from './application/components/Login/login-principal/login-principal.component';
import { RestablecerComponent } from './application/components/Login/restablecer/restablecer.component';
import { ConfirmarComponent } from './application/components/Login/confirmar/confirmar.component';
import { ConfiContraComponent } from './application/components/Login/confi-contra/confi-contra.component';
import { ConfiCorreoComponent } from './application/components/Login/confi-correo/confi-correo.component';

const routes: Routes = [
  { path: 'login-nuevo', component: LoginNuevoComponent },
  { path: 'login-principal', component: LoginPrincipalComponent },
  { path: 'restablecer', component: RestablecerComponent },
  { path: 'confirmar', component: ConfirmarComponent },
  { path: 'confi-contra', component: ConfiContraComponent },
  { path: 'confi-correo', component: ConfiCorreoComponent },
  { path: '', redirectTo: '/login-nuevo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
