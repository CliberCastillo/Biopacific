import { CargoService } from './../../core/services/cargo/cargo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cargo } from 'src/app/core/models/cargo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  model: Cargo = {idCargo:'', nombre:''};
  modalreferencia: any;
  especie : Cargo[];
  closeResult: string;
  mensaje : string;
  idUsuario : string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, private cargoService: CargoService 
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
    console.log(this.model);
    this.cargoService.RegistrarCargo(this.model).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Registrado',
        text: "El cargo se ha registro correctamente",
        icon: 'success'
      })
      this.closemodal();
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error',
        text: "Np se pudo registrar el cargo",
        icon: 'error'
      })
      this.closemodal();
    });
  }
  limpiarInput() {
    this.model = {idCargo: '', nombre: ''};
  }
}
