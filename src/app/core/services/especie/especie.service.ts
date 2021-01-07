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

  ListadoDeEspecie(): Observable<Especie[]>{
    const url = environment.apiURL + 'especie';
    return this.httpClient.get<Especie[]>(url);
  }
}
