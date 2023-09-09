import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {LoginComponent} from './components/login/login.component';
import {SinginComponent} from './components/singin/singin.component';
import {AdminComponent} from './components/admin/admin.component';
import {EmpleadoComponent} from './components/empleado/empleado.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {AgendaComponent} from "./components/agenda/agenda.component";
import {AgregarservicioComponent} from "./components/agregarservicio/agregarservicio.component";

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'agenda', component:AgendaComponent},
  {path: 'agregarservicio',component:AgregarservicioComponent},
  {path: 'homePage', component: PrincipalComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'homePage'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
