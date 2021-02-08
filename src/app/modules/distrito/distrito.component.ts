import { DistritoService } from './../../core/services/distrito/distrito.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Distrito } from './../../core/models/distrito';
import { Component, OnInit, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-distrito',
  templateUrl: './distrito.component.html',
  styleUrls: ['./distrito.component.css']
})
export class DistritoComponent implements OnInit {

  model: Distrito = {idDistrito:'', nombre:''};
  modalreferencia: any;
  especie : Distrito[];
  closeResult: string;
  mensaje : string;
  idUsuario : string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, private distritoService: DistritoService 
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
    this.distritoService.RegistrarDistrito(this.model).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Registrado',
        text: "El distrito se ha registro correctamente",
        icon: 'success'
      })
      this.closemodal();
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error',
        text: "No se pudo registrar el distrito",
        icon: 'error'
      })
      this.closemodal();
    });
  }
  limpiarInput() {
    this.model = {idDistrito: '', nombre: ''};
  }
}
