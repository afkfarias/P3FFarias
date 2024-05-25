import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListCursosComponent
  },
  {
    path: ':id',
    component: CursoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
