import { Router } from '@angular/router';
import { Usuario } from './../../core/models/usuario';
import { LoginService } from './../../core/services/login/login.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Usuario = { nombreUsuario: '', contrasena: '' };
  modalreferencia: any;
  closeResult: string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, 
    private loginservice: LoginService,
    private router: Router
    ) { }

  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content)
  }

  closemodal() {
    this.modalreferencia.close();
  }

  ngOnInit(): void {
  }

  submit() {
    this.visivilidadSpinner = true;
    this.loginservice.IniciarSesion(this.model).subscribe((response: any) => {
      if(response === true){
        this.visivilidadSpinner = false;
        this.limpiarInput();
        this.modalreferencia.close();
        this.router.navigate(['/cliente']);
      }
      else{
        this.visivilidadSpinner = false;
        this.limpiarInput();
        Swal.fire({
          title: 'Error',
          text: "El correo electrónico o contraseña es incorrecto",
          icon: 'error'
        })
      }
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
    });
  }

  limpiarInput() {
    this.model = { nombreUsuario: '', contrasena: '' };
  }

}

