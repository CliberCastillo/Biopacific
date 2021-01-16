import { OrdenService } from 'src/app/core/services/orden/orden.service';
import { Component, OnInit } from '@angular/core';
import { OrdenRealizado } from 'src/app/core/models/ordenrealizado';

@Component({
  selector: 'app-ordenrealizado',
  templateUrl: './ordenrealizado.component.html',
  styleUrls: ['./ordenrealizado.component.css']
})
export class OrdenrealizadoComponent implements OnInit {
  ordenesRealizados: OrdenRealizado[];
  constructor(private ordenService: OrdenService) { }

  ngOnInit(): void {
    this.OrdenesRealizados();
  }
  OrdenesRealizados() {
    this.ordenService.OrdenesRealizados().subscribe((response: OrdenRealizado[]) => {
      this.ordenesRealizados = response;
    }, (error: any) => {
      console.log(error);
    });
  }

}
