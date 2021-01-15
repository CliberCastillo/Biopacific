import { Examen } from './../../models/examen';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  constructor(private httpClient: HttpClient) { }

  ListadoDeExamenesPorPerfil(idPerfil: string): Observable<Examen[]>{
    const url = environment.apiURL + 'PerfilExamen/ExamenesPorPerfil/';
    return this.httpClient.get<Examen[]>(url + idPerfil);
  }
}
