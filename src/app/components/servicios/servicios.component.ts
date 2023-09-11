import {Component, OnInit} from '@angular/core';
import {ServicioService} from './servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
   servicios: any[]=[];

  constructor(private servicioService:ServicioService) {

  }

  ngOnInit(){
    this.servicios=this.servicioService.obtenerServicios();
    console.log(this.servicios);
  }
}





