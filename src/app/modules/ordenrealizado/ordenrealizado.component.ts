import { Cargo } from './../../core/models/cargo';
import { Resultado } from './../../core/models/resultado';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OrdenService } from 'src/app/core/services/orden/orden.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { OrdenRealizado } from 'src/app/core/models/ordenrealizado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordenrealizado',
  templateUrl: './ordenrealizado.component.html',
  styleUrls: ['./ordenrealizado.component.css']
})
export class OrdenrealizadoComponent implements OnInit {
  modelResultado: Resultado = {idResultado:'', idOrden:'', nombreResultado:''};
  modalreferencia: any;
  especie : Cargo[];
  closeResult: string;
  mensaje : string;
  idUsuario : string;
  idOrdenResultado: string;
  visivilidadSpinner = false;
  ordenesRealizados: OrdenRealizado[];
  constructor(private ordenService: OrdenService, 
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.OrdenesRealizados();
  }
  open(content: TemplateRef<any>,idOrden: string) {
    this.modalreferencia = this.modalService.open(content)
    this.idOrdenResultado = idOrden;
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

  submit(){
    this.visivilidadSpinner = true;
    this.modelResultado.idOrden = this.idOrdenResultado;
    this.ordenService.RegistrarResultado(this.modelResultado).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Registrado',
        text: "El resultado se ha registro correctamente",
        icon: 'success'
      })
      this.closemodal();
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error',
        text: "No se pudo registrar el resultado",
        icon: 'error'
      })
      this.closemodal();
    });
  }
  limpiarInput() {
    this.modelResultado = {idResultado:'', idOrden:'', nombreResultado:''};
  }
}
