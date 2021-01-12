import { RegistroService } from './../../core/services/registro/registro.service';
import { Veterinaria } from './../../core/models/veterinaria';
import { DistritoService } from './../../core/services/distrito/distrito.service';
import { Distrito } from './../../core/models/distrito';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  model: Veterinaria = { nombre: '', direccion: '', telefono: '', razonSocial: '', idDistrito: '', correo: '', contrasena: '', RUC: '' };
  closeResult: string;
  modalreferencia: any;
  validarCorreo: boolean;
  modal: NgbModalRef;
  distrito: Distrito[];
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal,
    private distritoService: DistritoService,
    private registroService: RegistroService
  ) { }

  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
  }

  ngOnInit(): void {
    this.ListadoDeDistrito()
  }

  ListadoDeDistrito() {
    this.distritoService.ListadoDeDistrito().subscribe((response: Distrito[]) => {
      this.distrito = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  onSubmit() {
    this.visivilidadSpinner = true;
    this.registroService.ValidarCorreo(this.model.correo).subscribe((response: any) => {
      if(response){
        this.visivilidadSpinner = false;
        Swal.fire({
          title: 'Alerta!',
          text: "El correo electrónico ya existe",
          icon: 'info'
        })
      }
      else{
        this.registroService.RegistrarVeterinaria(this.model).subscribe((response: Veterinaria) => {
          this.visivilidadSpinner = false;
          this.LimpiarInput();
          Swal.fire({
            title: 'Exitoso!',
            text: "La veterinaria a sido registrada correctamente, ya puedes inciar sesión",
            icon: 'success'
          })
          this.modalreferencia.close();
        }, (error: any) => {
          this.visivilidadSpinner = false;
          this.LimpiarInput();
          Swal.fire({
            title: 'Error!',
            text: "La veterinaria no se ha registrado",
            icon: 'error'
          })
          this.modalreferencia.close();
        });
      }
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.LimpiarInput();
      Swal.fire({
        title: 'Error!',
        text: "La veterinaria no se ha registrado.",
        icon: 'error'
      })
    });
  }
  LimpiarInput() {
    this.model = { nombre: '', direccion: '', telefono: '', razonSocial: '', idDistrito: '', correo: '', contrasena: '', RUC: '' };
  }
}
