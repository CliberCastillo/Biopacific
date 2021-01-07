import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Raza } from './../../models/raza';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  constructor(private httpClient: HttpClient) { }

  ListadoDeRazaPorEspecie(idEspecie: string): Observable<Raza[]>{
    console.log(idEspecie);
    const url = environment.apiURL + 'Raza/RazaPorEspecie/'+ idEspecie;
    console.log(url);
    return this.httpClient.get<Raza[]>(url);
  }
}
