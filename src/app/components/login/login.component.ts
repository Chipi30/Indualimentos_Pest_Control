import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

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
    this.authService.login({
      mail: this.user.user,
      password: this.user.password
    }).subscribe(res=>{
      console.log(res);

    })
  }

  valCheck: string[] = ['remember'];



  constructor(public layoutService: LayoutService, private authService: AuthService) { }

}
