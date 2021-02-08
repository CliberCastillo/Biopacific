import { EspecieService } from './../../core/services/especie/especie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Especie } from 'src/app/core/models/especie';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {
  model: Especie = {idEspecie:'', nombre:''};
  modalreferencia: any;
  especie : Especie[];
  closeResult: string;
  mensaje : string;
  idUsuario : string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, private especieService: EspecieService 
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
    this.especieService.RegistrarEspecie(this.model).subscribe((response: any) => {
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
    this.model = {idEspecie: '', nombre: ''};
  }

}
