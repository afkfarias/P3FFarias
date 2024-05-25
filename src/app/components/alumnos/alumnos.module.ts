import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AlumnoDetailComponent,
    ListAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
  exports:[
    ListAlumnosComponent
  ]
})
export class AlumnosModule { }
