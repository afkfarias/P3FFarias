import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( (m) => m.HomeModule),    
  },
   {
    path: 'alumnos',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('../alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
  },  
  {
    path: 'cursos',
    loadChildren: () =>
      import('../cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  {
    path: 'clases',
    loadChildren: () =>
      import('../clases/clases.module').then(
        (m) => m.ClasesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
