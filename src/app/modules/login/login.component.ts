import { Usuario } from './../../core/models/usuario';
import { LoginService } from './../../core/services/login/login.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Usuario = {correo: '', contrasena: ''};
  cargo: Usuario[];
  modalreferencia: any;
  closeResult: string;
  constructor(private modalService: NgbModal, private loginservice: LoginService) {}

  open(content: TemplateRef<any>){
    this.modalreferencia=this.modalService.open(content)
  }

  closemodal(){
    this.modalreferencia.close();
  }
  ngOnInit(): void {
    
  }
  ListadoDeCargo(){
    this.loginservice.ListadoDeCargos().subscribe((response: Usuario[]) => {
      this.cargo = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  limpiar(){
    this.model = {correo: '', contrasena: ''};
  }
  submit(){
    console.log(this.model);
    this.limpiar()
  }
}

