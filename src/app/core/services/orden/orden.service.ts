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

  RegistrarOrden(orden: Orden): Observable<any> {
    return this.httpClient.post<any>(this.url, orden);
  }
}