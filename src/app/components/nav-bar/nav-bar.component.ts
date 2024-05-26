import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { Observable } from 'rxjs';
import { IUser } from '../auth/models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  authUser$: Observable<IUser | null>;

  constructor(private router: Router,
    private authService: AuthService
  ){
    this.authUser$ = this.authService.authUser$;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

}
