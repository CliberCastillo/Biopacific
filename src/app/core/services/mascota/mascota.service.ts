import { Usuario } from './../../models/usuario';
import { Listadomascota } from './../../models/listadomascota';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private httpClient: HttpClient) { }
  url = environment.apiURL + 'mascota/'+'listadomascota';

  ListadoDeMascota(usuario: Usuario): Observable<Listadomascota[]>{
    return this.httpClient.post<Listadomascota[]>(this.url, usuario);
  }
}
