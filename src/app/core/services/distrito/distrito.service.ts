import { Distrito } from './../../models/distrito';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiURL + 'distrito';
  ListadoDeDistrito(): Observable<Distrito[]>{
    return this.httpClient.get<Distrito[]>(this.url);
  }

  RegistrarDistrito(distrito: Distrito): Observable<any> {
    return this.httpClient.post<any>(this.url, distrito);
  }
}
