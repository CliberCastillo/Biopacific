import { Router } from '@angular/router';
import { Usuario } from './../../core/models/usuario';
import { LoginService } from './../../core/services/login/login.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Usuario = {idUsuario:'', nombreUsuario: '', contrasena: '' };
  modalreferencia: any;
  usuario : Usuario[];
  closeResult: string;
  mensaje : string;
  idUsuario : string;
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
    console.log(this.model);
    this.loginservice.IniciarSesion(this.model).subscribe((response: any) => {
      console.log(response.estado);
      if(response.estado === true){
          localStorage.setItem('IdVeterinaria', response.idVeterinaria);
          this.limpiarInput();
          this.visivilidadSpinner = false;
          this.modalreferencia.close();
          this.router.navigate(['/cliente']);
      }
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error',
        text: "El correo electrónico o la contraseña es incorrecto",
        icon: 'error'
      })
    });
  }

  limpiarInput() {
    this.model = {idUsuario: '', nombreUsuario: '', contrasena: '' };
  }

}

