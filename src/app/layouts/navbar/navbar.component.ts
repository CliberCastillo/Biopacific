import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() administrador: string = 'home';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  navegarHaciaCliente(){
    this.router.navigate(['/cliente']);
  }
  OrdenesRealizados(){
    this.router.navigate(['/administrador/orden']);
  }
  CerrarSesion(){
    this.router.navigate(['']);
  }
}
