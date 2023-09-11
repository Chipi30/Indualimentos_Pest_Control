import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  constructor(public layoutService: LayoutService, private authService: AuthService) { }


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

    this.authService.register({
      credential: {
        mail: "juliethbecerra33@gmail.com",
        userName: this.newUser.user
      },
      user: {
        address: this.newUser.direccion,
        name: this.newUser.name,
        role: "A"
      }
    }).subscribe(res => {
      console.log(res);
    })
  }

  valCheck: string[] = ['remember'];



}
