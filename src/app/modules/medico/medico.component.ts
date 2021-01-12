import { Medico } from './../../core/models/medico';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  modalreferencia: any;
  model: Medico = { idMedico: '', nombre: '', apellido: '', edad: '', dni: '', sexo: '', idVeterinaria: ''};
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
  }

  closemodal() {
    this.modalreferencia.close();
  }
  submit(){
    this.model.idVeterinaria = localStorage.getItem('IdVeterinaria');
    this.model.dni = this.model.dni.toString();
    this.model.edad = this.model.edad.toString();
    console.log(this.model);
  }
}
