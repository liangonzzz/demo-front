import { Routes } from '@angular/router';

//Importaciones de Rutas
import { LoginNuevoComponent } from '../../application/components/Login/login-nuevo/login-nuevo.component';
import { LoginRestablecerComponent } from '../../application/components/Login/login-restablecer/login-restablecer.component';
import { LoginConfirmarComponent } from '../../application/components/Login/login-confirmar/login-confirmar.component';
import { LoginMensajeContraComponent } from '../../application/components/Login/login-mensaje-contra/login-mensaje-contra.component';
import { LoginMensajeEmailComponent } from '../../application/components/Login/login-mensaje-email/login-mensaje-email.component';
import { LoginPrincipalComponent } from '../../application/components/Login/login-principal/login-principal.component';

export const routes: Routes = [
  { path: 'login-nuevo', component: LoginNuevoComponent },
  { path: 'login-restablecer', component: LoginRestablecerComponent },
  { path: 'login-confirmar', component: LoginConfirmarComponent },
  { path: 'login-mensaje-email', component: LoginMensajeEmailComponent },
  { path: 'login-mensaje-contra', component: LoginMensajeContraComponent },
  { path: 'login-principal', component: LoginPrincipalComponent },
  { path: '', redirectTo: '/login-nuevo', pathMatch: 'full' }
];







