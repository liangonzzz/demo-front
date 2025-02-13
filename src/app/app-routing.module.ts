import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginNuevoComponent } from './application/components/Login/login-nuevo/login-nuevo.component';

const routes: Routes = [
  { path: 'login', component: LoginNuevoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }