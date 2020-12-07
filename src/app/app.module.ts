import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
