import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'nav',
    canActivate: [authGuard],
    component: NavBarComponent,
    loadChildren: () => import('./components/nav-bar/nav-bar.module').then( (m) => m.NavBarModule),    
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
