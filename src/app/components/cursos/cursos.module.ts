import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListCursosComponent,
    CursoDetailComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
