// auth.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          // Redirigir al usuario según su rol
          if (this.authService.isAdmin()) {
            // Redirigir al dashboard de administrador
          } else {
            // Redirigir al dashboard de estudiante
          }
        } else {
          this.error = 'Credenciales inválidas';
        }
      }
    );
  }
}