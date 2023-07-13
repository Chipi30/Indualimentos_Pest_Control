import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},

 {path: 'homePage', component: PrincipalComponent },
 {path: '**', pathMatch: 'full',  redirectTo: 'homePage'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
