import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/services/auth.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);

    fixture.detectChanges();
  });

  it('El campo email debe ser requerido', () => {
    const control = component.loginForm.get('email');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('El campo password debe ser requerido', () => {
    const control = component.loginForm.get('password');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe llamar markAllAsTouched de loginForm al llamar login, si el formulario es invalido', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });
    expect(component.loginForm.invalid).toBeTrue();
    const spyOnMarkAllAsTouched = spyOn(
      component.loginForm,
      'markAllAsTouched'
    );
    component.login();
    expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
  });

  it('Debe llamar a authService.login si el formulario es valido al llamar login', () => {
    component.loginForm.setValue({
      email: 'email@mail.com',
      password: '123456',
    });
    expect(component.loginForm.valid).toBeTrue();
    const spyOnLogin = spyOn(authService, 'login');
    component.login();
    expect(spyOnLogin).toHaveBeenCalled();
  });
});
