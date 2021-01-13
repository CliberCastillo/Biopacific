import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ordenpormascota } from 'src/app/core/models/ordenpormascota';
import { OrdenService } from 'src/app/core/services/orden/orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  ordenesPorMascota: Ordenpormascota[];
  nombreMascota: string;
  cargandoGif = false;

  constructor(
    private ordenService: OrdenService,
    private router: Router,

    ) { }

  ngOnInit(): void {
    const idMascota = localStorage.getItem('IdMascota');
    this.OrdenesPorMascota(idMascota);
  }
  OrdenesPorMascota(idMascota: string) {
    this.cargandoGif = true;
    this.ordenService.OrdenesPorMascota(idMascota).subscribe((response: Ordenpormascota[]) => {
      this.ordenesPorMascota = response;
      this.cargandoGif = false;
      console.log(this.router.url);
    }, (error: any) => {
      console.log(error);
    });
  }
  IrAlInicio(){
    this.router.navigate(['cliente']);
  }
}
