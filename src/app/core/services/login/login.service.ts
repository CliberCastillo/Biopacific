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
  url = environment.apiURL + 'usuario/iniciarsesion';

  IniciarSesion(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.url, usuario);
  }
}
