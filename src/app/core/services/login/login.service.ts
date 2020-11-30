import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  ListadoDeUsuarios(): Observable<Usuario[]>{
    const url = environment.apiURL + 'users';
    return this.httpClient.get<Usuario[]>(url);
  }
}
