import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  ListadoDeCargos(): Observable<Usuario[]>{
    const url = environment.apiURL + 'cargo';
    return this.httpClient.get<Usuario[]>(url);
  }
}
