import { Resultado } from './../../models/resultado';
import { OrdenRealizado } from './../../models/ordenrealizado';
import { Ordenpormascota } from './../../models/ordenpormascota';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Orden } from './../../models/orden';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private httpClient: HttpClient) { }
  url = environment.apiURL + 'orden';
  urlResultado = environment.apiURL + 'resultado';

  RegistrarOrden(orden: Orden): Observable<any> {
    return this.httpClient.post<any>(this.url, orden);
  }
  OrdenesPorMascota(idMascota: string): Observable<Ordenpormascota[]>{
    return this.httpClient.get<Ordenpormascota[]>(this.url + '/OrdenesPorMascota/' + idMascota);
  }
  OrdenesRealizados(): Observable<OrdenRealizado[]>{
    return this.httpClient.get<OrdenRealizado[]>(this.url + '/OrdenesRealizados');
  }

  CancelarOrden(idOrden: string): Observable<any>{
    return this.httpClient.get<any>(this.url + '/CancelarOrden/' + idOrden);
  }
  
  AceptarOrden(idOrden: string): Observable<any>{
    return this.httpClient.get<any>(this.url + '/AceptarOrden/' + idOrden);
  }

  RegistrarResultado(resultado: Resultado): Observable<any> {
    return this.httpClient.post<any>(this.urlResultado, resultado);
  }
}
