import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OrdenService } from 'src/app/core/services/orden/orden.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { OrdenRealizado } from 'src/app/core/models/ordenrealizado';

@Component({
  selector: 'app-ordenrealizado',
  templateUrl: './ordenrealizado.component.html',
  styleUrls: ['./ordenrealizado.component.css']
})
export class OrdenrealizadoComponent implements OnInit {
  ordenesRealizados: OrdenRealizado[];
  modalreferencia: any;
  constructor(private ordenService: OrdenService, 
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.OrdenesRealizados();
  }
  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'xl' })
  }

  closemodal() {
    this.modalreferencia.close();
  }
  OrdenesRealizados() {
    this.ordenService.OrdenesRealizados().subscribe((response: OrdenRealizado[]) => {
      this.ordenesRealizados = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  CancelarOrden(idOrden: string){
    alert(idOrden);
    this.ordenService.CancelarOrden(idOrden).subscribe((response: any) => {
      console.log("cancelado el orden "+idOrden);
      console.log(response);
      this.OrdenesRealizados();
      console.log('ordenes realziados' +this.ordenesRealizados);
    }, (error: any) => {
      console.log(error);
    });
  }
  AceptarOrden(idOrden: string){
    alert(idOrden);
    this.ordenService.AceptarOrden(idOrden).subscribe((response: any) => {
      console.log("aceptado el orden "+idOrden);
      console.log(response);
      this.OrdenesRealizados();
    }, (error: any) => {
      console.log(error);
    });
  }
  IrAlInicio(){
    this.router.navigate(['administrador']);
  }

}
