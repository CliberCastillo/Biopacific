import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Especie } from './../../models/especie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiURL + 'especie';
  ListadoDeEspecie(): Observable<Especie[]>{
    return this.httpClient.get<Especie[]>(this.url);
  }

  RegistrarEspecie(especie: Especie): Observable<any> {
    return this.httpClient.post<any>(this.url, especie);
  }
}
