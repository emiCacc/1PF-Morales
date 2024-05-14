import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TeachersComponent } from './teachers.component';
import { AuthService, User } from 'src/app/layouts/core/services/auth.service';
import { of, Subscription } from 'rxjs';

describe('TeachersComponent', () => {
  let component: TeachersComponent;
  let fixture: ComponentFixture<TeachersComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachersComponent],
      imports: [MatDialogModule],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  /* PRUEBA PARA CUANDO EL USUARIO ES ADMIN */
  it('should set isAdmin to true when the user is an admin', () => {
    // Mock del behavior del authService
    const adminUser: User = { email: 'admin@example.com', password: 'admin', role: 'admin' };
    const subscription = new Subscription();
    of(adminUser).subscribe(() => subscription); // Aca me suscribo al observable y asigno la suscripción a la variable
    spyOn(authService.actualUser$, 'subscribe').and.returnValue(subscription);

    // Trigerea la detección de cambios
    fixture.detectChanges();

    // Aca verifico si el admin se setea en true
    expect(component.isAdmin).toBe(true);
  });

  /* PRUEBA PARA CUANDO EL USUARIO NO ES ADMIN */
  it('should set isAdmin to false when the user is not an admin', () => {
    // Mock del behavior del authService
    const studentUser: User = { email: 'student@example.com', password: 'student', role: 'student' };
    const subscription = new Subscription();
    of(studentUser).subscribe(() => subscription); // Suscribirse al observable y asignar la suscripción a la variable
    spyOn(authService.actualUser$, 'subscribe').and.returnValue(subscription);

    // Trigerea la detección de cambios
    fixture.detectChanges();

    // Aca verifico si el admin se setea en false
    expect(component.isAdmin).toBe(false);
  });
});