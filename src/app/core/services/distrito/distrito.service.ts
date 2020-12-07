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

  ListadoDeDistrito(): Observable<Distrito[]>{
    const url = environment.apiURL + 'distrito';
    return this.httpClient.get<Distrito[]>(url);
  }
}
