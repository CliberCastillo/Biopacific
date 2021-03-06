import { DistritoComponent } from './modules/distrito/distrito.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoginComponent } from './modules/login/login.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ImagenesComponent } from './layouts/imagenes/imagenes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './modules/registro/registro.component';
import { HomeComponent } from './modules/home/home.component';
import { AdministradorComponent } from './modules/home/administrador/administrador.component';
import { ClienteComponent } from './modules/home/cliente/cliente.component';
import { MascotaComponent } from './modules/mascota/mascota.component';
import { MantenimientomascotaComponent } from './modules/mascota/mantenimientomascota/mantenimientomascota/mantenimientomascota.component';
import { MedicoComponent } from './modules/medico/medico.component';
import { MantenimientomedicoComponent } from './modules/medico/mantenimientomedico/mantenimientomedico.component';
import { OrdenComponent } from './modules/orden/orden.component';
import { OrdenrealizadoComponent } from './modules/ordenrealizado/ordenrealizado.component';
import { EspecieComponent } from './modules/especie/especie.component';
import { CargoComponent } from './modules/cargo/cargo.component';
import { ResultadoComponent } from './modules/resultado/resultado.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    ImagenesComponent,
    RegistroComponent,
    HomeComponent,
    AdministradorComponent,
    ClienteComponent,
    MascotaComponent,
    MantenimientomascotaComponent,
    MedicoComponent,
    MantenimientomedicoComponent,
    OrdenComponent,
    OrdenrealizadoComponent,
    EspecieComponent,
    CargoComponent,
    DistritoComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
