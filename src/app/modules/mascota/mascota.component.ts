import { Mascota } from './../../core/models/mascota';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  model: Mascota = { nombre: '', genero: '', edad: null, idEspecie: '', idVeterinaria: '', idRaza: '', nombrePersona: '', celular: ''};
  modalreferencia: any;
  closeResult: string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
  }

  closemodal() {
    this.modalreferencia.close();
  }
  submit() {}

}
