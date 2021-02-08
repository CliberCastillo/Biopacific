import { Cargo } from './../../models/cargo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  constructor(private httpClient: HttpClient) { }

  url = environment.apiURL + 'cargo';
  ListadoDeCargo(): Observable<Cargo[]>{
    return this.httpClient.get<Cargo[]>(this.url);
  }

  RegistrarCargo(cargo: Cargo): Observable<any> {
    return this.httpClient.post<any>(this.url, cargo);
  }
}
