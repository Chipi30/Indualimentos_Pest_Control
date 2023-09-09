//agregarservicio.component.ts
import { Component } from '@angular/core';
import {Servicio} from "./servicio.model";

@Component({
  selector: 'app-agregarservicio',
  templateUrl: './agregarservicio.component.html',
  styleUrls: ['./agregarservicio.component.css']
})
export class AgregarservicioComponent {
  nuevoServicio:Servicio={
    id:null,
    nombre:'',
    descripcion:'',
    tipoServicio:'',
    precioMetroCubico:null
  };

  agregarServicio(){
    console.log(this.nuevoServicio)
  }
}
