import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinaria } from '../../models/veterinaria';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiURL + 'veterinaria';

  RegistrarVeterinaria(veterinaria: Veterinaria): Observable<Veterinaria> {
    return this.httpClient.post<Veterinaria>(this.url, veterinaria);
  }
}
