import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClasesComponent } from './list-clases/list-clases.component';
import { ClaseDetailComponent } from './clase-detail/clase-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListClasesComponent
  },
  {
    path: ':id',
    component: ClaseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
