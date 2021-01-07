import { Perfil } from './../../models/perfil';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private httpClient: HttpClient) { }
  url = environment.apiURL + 'perfil';

  ListadoDePerfiles(): Observable<Perfil[]>{
    return this.httpClient.get<Perfil[]>(this.url);
  }
}
