import { ExamenService } from './../../../core/services/examen/examen.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenService } from './../../../core/services/orden/orden.service';
import { Orden } from './../../../core/models/orden';
import { Perfil } from './../../../core/models/perfil';
import { PerfilService } from './../../../core/services/perfil/perfil.service';
import { Medico } from './../../../core/models/medico';
import { MedicoService } from './../../../core/services/medico/medico.service';
import { Listadomascota } from './../../../core/models/listadomascota';
import { MascotaService } from 'src/app/core/services/mascota/mascota.service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'
import { Examen } from 'src/app/core/models/examen';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  model: Orden = { idMascota: '', idMedico: '', idPerfil: '', fechaRegistro: ''};
  mascota : Listadomascota[];
  medico : Medico[];
  examen : Examen[];
  modalreferencia: any;
  visivilidadSpinner = false;
  perfil : Perfil[];
  constructor(private router: Router, 
    private mascotaService: MascotaService,
    private medicoService: MedicoService,
    private perfilService: PerfilService,
    private ordenService: OrdenService,
    private examenService: ExamenService,
    private modalService: NgbModal,
    public datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    localStorage.setItem('OrdenUrl','false');
    const idVeterinaria = localStorage.getItem('IdVeterinaria');
    this.ListadoDeMascota(idVeterinaria);
    this.ListadoDeMedico(idVeterinaria);
    this.ListadoDePerfil();
  }
  NavegarHaciaHome(){
    this.router.navigate(['']);
  }
  ListadoDeMascota(idVeterinaria: string) {
    this.mascotaService.ListadoDeMascota(idVeterinaria).subscribe((response: Listadomascota[]) => {
      this.mascota = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  ListadoDeMedico(idVeterinaria: string) {
    this.medicoService.ListadoDeMedicosPorVeterinaria(idVeterinaria).subscribe((response: Medico[]) => {
      this.medico = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  ListadoDePerfil() {
    this.perfilService.ListadoDePerfiles().subscribe((response: Perfil[]) => {
      this.perfil = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  GenerarServicio(){
    this.visivilidadSpinner = true;
    const date = new Date();
    const datos = this.datePipe.transform(date, 'dd/mm/yyyy hh:mm');
    this.model.fechaRegistro = datos.toString();
    this.ordenService.RegistrarOrden(this.model).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      Swal.fire({
        title: 'Exitoso!',
        text: "Felicitaciones, servicio generado correctamente",
        icon: 'success'
      })
    }, (error: any) => {
      this.visivilidadSpinner = false;
      Swal.fire({
        title: 'Error',
        text: "No se ha generado el servicio, intentelo de nuevo",
        icon: 'error'
      })
    });
  }
  ListadoExamenesPorPerfil(idPerfil: string, content: TemplateRef<any>){
    this.visivilidadSpinner = true;
    this.examenService.ListadoDeExamenesPorPerfil(idPerfil).subscribe((response: Examen[]) => {
      this.examen = response;
      this.visivilidadSpinner = false;
    }, (error: any) => {
      console.log(error);
    });
    this.open(content);
  }

  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'md',centered: true })
  }

  closemodal() {
    this.modalreferencia.close();
  }
}
