import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  user={
    user: '',
    password: ''
  }


  login(){
    console.log(this.user.user);
    console.log(this.user.password);
  }


  valCheck: string[] = ['remember'];

  password!: string;

  constructor(public layoutService: LayoutService) { }

}
