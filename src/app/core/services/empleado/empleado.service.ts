import { Observable } from 'rxjs';
import { Empleado } from './../../models/empleado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private httpClient: HttpClient) { }

  url = environment.apiURL + 'empleado';

  RegistrarEmpleado(empleado: Empleado): Observable<any> {
    return this.httpClient.post<any>(this.url, empleado);
  }
}
