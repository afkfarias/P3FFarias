import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ListClasesComponent } from './list-clases/list-clases.component';
import { ClaseDetailComponent } from './clase-detail/clase-detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListClasesComponent,
    ClaseDetailComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    SharedModule
  ]
})
export class ClasesModule { }
