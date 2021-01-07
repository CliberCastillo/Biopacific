import { Raza } from './../../core/models/raza';
import { RazaService } from './../../core/services/raza/raza.service';
import { EspecieService } from './../../core/services/especie/especie.service';
import { Especie } from './../../core/models/especie';
import { Mascota } from './../../core/models/mascota';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MascotaService } from 'src/app/core/services/mascota/mascota.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  model: Mascota = { nombre: '', genero: '', edad: null, idEspecie: '', idVeterinaria: '', idRaza: '', nombrePropietario: ''};
  modalreferencia: any;
  especie: Especie[];
  raza: Raza[];
  closeResult: string;
  visivilidadSpinner = false;
  constructor(private modalService: NgbModal, 
    private especieService: EspecieService,
    private razaService: RazaService,
    private mascotaService: MascotaService
    ) { }

  ngOnInit(): void {
    this.ListadoDeEspecie();
  }

  open(content: TemplateRef<any>) {
    this.modalreferencia = this.modalService.open(content, { size: 'lg' })
  }

  closemodal() {
    this.modalreferencia.close();
  }
  submit() {
    this.model.idVeterinaria = localStorage.getItem('IdVeterinaria');
    this.visivilidadSpinner = true;
    this.mascotaService.RegistrarMascota(this.model).subscribe((response: any) => {
      this.visivilidadSpinner = false;
      Swal.fire({
        title: 'Exitoso!',
        text: "La mascota a sido registrada correctamente",
        icon: 'success'
      })
      this.modalreferencia.close();
    }, (error: any) => {
      this.visivilidadSpinner = false;
      this.limpiarInput();
      Swal.fire({
        title: 'Error!',
        text: "La mascota no se ha registrado",
        icon: 'error'
      })
    });
  }

  ListadoDeEspecie() {
    this.especieService.ListadoDeEspecie().subscribe((response: Especie[]) => {
      this.especie = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  ListadoDeRazaPorEspecie(idEspecie: string) {
    this.razaService.ListadoDeRazaPorEspecie(idEspecie).subscribe((response: Raza[]) => {
      this.raza = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  limpiarInput() {
    this.model = { nombre: '', genero: '', edad: null, idEspecie: '', idVeterinaria: '', idRaza: '', nombrePropietario: ''};
  }
}
