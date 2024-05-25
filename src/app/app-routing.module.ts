import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( (m) => m.HomeModule),    
  },
   {
    path: 'alumnos',
    loadChildren: () =>
      import('./components/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
  },  
  {
    path: 'cursos',
    loadChildren: () =>
      import('./components/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  {
    path: 'clases',
    loadChildren: () =>
      import('./components/clases/clases.module').then(
        (m) => m.ClasesModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
