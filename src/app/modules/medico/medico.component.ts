import { MedicoService } from './../../core/services/medico/medico.service';
import { Medico } from './../../core/models/medico';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  modalreferencia: any;
  visivilidadSpinner = false;
  model: Medico = { idMedico: '', nombre: '', apellido: '', edad: '', dni: '', sexo: '', idVeterinaria: ''};
  constructor(
    private modalService: NgbModal,
    private medicoService: MedicoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
  }

  closemodal() {
    this.modalreferencia.close();
  }
  submit(){
    const idVeterinaria = localStorage.getItem('IdVeterinaria');
    this.model.idVeterinaria = idVeterinaria;
    this.model.dni = this.model.dni.toString();
    this.model.edad = this.model.edad.toString();
    console.log(this.model);
    this.visivilidadSpinner = true;
    this.medicoService.RegistrarMedico(this.model).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      this.modalreferencia.close();
      Swal.fire({
        title: 'Exitoso!',
        text: "El medico a sido registrada correctamente",
        icon: 'success'
      }).then(function() {
        location.reload();
      });
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error!',
        text: "El medico no se ha registrado",
        icon: 'error'
      })
    });
  }
  limpiarInput() {
    this.model = { idMedico: '', nombre: '', apellido: '', edad: '', dni: '', sexo: '', idVeterinaria: ''};
  }
}
