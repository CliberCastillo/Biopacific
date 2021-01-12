import { HttpClient } from '@angular/common/http';
import { Medico } from './../../models/medico';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private httpClient: HttpClient) { }
  url = environment.apiURL + 'medico';

  ListadoDeMedicosPorVeterinaria(idVeterinaria: string): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.url + '/MedicosPorVeterinaria/' + idVeterinaria);
  }
  RegistrarMedico(medico: Medico): Observable<any> {
    return this.httpClient.post<any>(this.url, medico);
  }
}
