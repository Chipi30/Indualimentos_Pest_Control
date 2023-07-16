import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'admin', component:AdminComponent},

 {path: 'homePage', component: PrincipalComponent },
 {path: '**', pathMatch: 'full',  redirectTo: 'homePage'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
