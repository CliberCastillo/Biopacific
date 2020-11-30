import { Usuario } from './../../core/models/usuario/usuario';
import { LoginService } from './../../core/services/login/login.service';
import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Usuario[];
  closeResult: string;
  constructor(private modalService: NgbModal, private loginservice: LoginService) {}
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    this.ListadoDeUsuario();
  }
  ListadoDeUsuario(){
    this.loginservice.ListadoDeUsuarios().subscribe((response: Usuario[]) => {
      this.usuarios = response;
    }, (error: any) => {
      console.log(error);
    });
  }
}

