import { Listadomascota } from './../../../../core/models/listadomascota';
import { MascotaService } from './../../../../core/services/mascota/mascota.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mantenimientomascota',
  templateUrl: './mantenimientomascota.component.html',
  styleUrls: ['./mantenimientomascota.component.css']
})
export class MantenimientomascotaComponent implements OnInit {
  p: number = 1;
  mascota: Listadomascota[];
  mensaje : string;
  modalreferencia: any;
  closeResult: string;
  visivilidadSpinner = false;
    
  constructor(private modalService: NgbModal, private mascotaService: MascotaService) {
   }

  ngOnInit(): void {
  }
  
  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
    this.ListadoDeMascota(localStorage.getItem('IdVeterinaria'))
  }

  closemodal() {
    this.modalreferencia.close();
  }
  submit() {}
  ListadoDeMascota(idVeterinaria: string) {
    this.visivilidadSpinner = true;
    this.mascotaService.ListadoDeMascota(idVeterinaria).subscribe((response: Listadomascota[]) => {
      this.visivilidadSpinner = false;
      this.mascota = response;
    }, (error: any) => {
      console.log(error);
    });
  }
}
