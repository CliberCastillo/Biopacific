import { EmpleadoService } from './../../core/services/empleado/empleado.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Empleado } from './../../core/models/empleado';
import { Component, OnInit, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  model: Empleado = {idEmpleado:'', nombre:'', dni:'', telefono:'', estado:'', idUsuario:'', idCargo:'',idDistrito:''};
  modalreferencia: any;
  especie : Empleado[];
  closeResult: string;
  mensaje : string;
  idUsuario : string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, private empleadoService: EmpleadoService 
    ) { }

  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content)
  }

  closemodal() {
    this.modalreferencia.close();
  }
  ngOnInit(): void {
  }

  submit(){
    this.visivilidadSpinner = true;
    var estado = 1;
    this.model.estado = estado.toString();
    this.empleadoService.RegistrarEmpleado(this.model).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Registrado',
        text: "La especie se ha registro correctamente",
        icon: 'success'
      })
      this.closemodal();
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error',
        text: "no se pudo registrar a la especie",
        icon: 'error'
      })
      this.closemodal();
    });
  }
  limpiarInput() {
    this.model = {idEmpleado:'', nombre:'', dni:'', telefono:'', estado:'', idUsuario:'', idCargo:'',idDistrito:''};
  }


}
