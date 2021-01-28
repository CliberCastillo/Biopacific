import { Mascota } from './../../models/mascota';
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
  url = environment.apiURL + 'mascota';

  ListadoDeMascota(idVeterinaria: string): Observable<Listadomascota[]>{
    return this.httpClient.get<Listadomascota[]>(this.url + '/ListadoMascotasPorVeterinaria/' + idVeterinaria);
  }

  RegistrarMascota(mascota: Mascota): Observable<any> {
    return this.httpClient.post<any>(this.url, mascota);
  }
  EliminarMascota(idMascota: string): Observable<any> {
    return this.httpClient.delete(this.url+'/'+idMascota);
  }
  ExcelMascotasPorVeterinaria(idVeterinaria: string){
    return this.httpClient.get<any>(this.url + '/ExcelMascotasPorVeterinaria/' + idVeterinaria);
  }
}
