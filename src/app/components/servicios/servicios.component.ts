import {Component, Input} from '@angular/core';
import {Servicio} from '../agregarservicio/servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  @Input() servicios: Servicio[];

  constructor() {
    this.servicios=[];
  }
}





