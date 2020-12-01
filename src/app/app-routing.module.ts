import { HomeComponent } from './modules/home/home.component';
import { ClienteComponent } from './modules/home/cliente/cliente.component';
import { AdministradorComponent } from './modules/home/administrador/administrador.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'administrador', component: AdministradorComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
