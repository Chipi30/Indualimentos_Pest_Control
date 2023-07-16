import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  newUser={
    name:'',
    user: '',
    password: '',
    direccion:''
  }

  singin(){
    console.log(this.newUser.name);
    console.log(this.newUser.user);
    console.log(this.newUser.password);
    console.log(this.newUser.direccion);
  }

  valCheck: string[] = ['remember'];

  constructor(public layoutService: LayoutService) { }

}
