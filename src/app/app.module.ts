import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';

// nuevos modulos
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrincipalComponent } from './components/principal/principal.component';
import { SinginComponent } from './components/singin/singin.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { AgrEmpleadoComponent } from './components/agr-empleado/agr-empleado.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgregarservicioComponent } from './components/agregarservicio/agregarservicio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarclienteComponent } from './components/agregarcliente/agregarcliente.component';
import "@angular/common/http"
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    SinginComponent,
    AdminComponent,
    EmpleadoComponent,
    AgrEmpleadoComponent,
    ServiciosComponent,
    AgendaComponent,
    AgregarservicioComponent,
    ClientesComponent,
    AgregarclienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    CarouselModule,
    HttpClientModule,
    ChipModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
