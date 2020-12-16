import { Listadomascota } from './../../../../core/models/listadomascota';
import { Usuario } from './../../../../core/models/usuario';
import { MascotaService } from './../../../../core/services/mascota/mascota.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mantenimientomascota',
  templateUrl: './mantenimientomascota.component.html',
  styleUrls: ['./mantenimientomascota.component.css']
})
export class MantenimientomascotaComponent implements OnInit {
  mascota: Listadomascota[];
  modalreferencia: any;
  closeResult: string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, private mascotaService: MascotaService) { }

  ngOnInit(): void {
  }
  
  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
  }

  closemodal() {
    this.modalreferencia.close();
  }
  submit() {}

  ListadoDeMascota(usuario : Usuario) {
    this.visivilidadSpinner = true;
    this.mascotaService.ListadoDeMascota(usuario).subscribe((response: Listadomascota[]) => {
      this.visivilidadSpinner = false;
      this.mascota = response;
    }, (error: any) => {
      console.log(error);
    });
  }

}
