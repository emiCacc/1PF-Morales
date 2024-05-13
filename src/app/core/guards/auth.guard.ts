import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/layouts/core/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
let authService = inject(AuthService);
let router = inject(Router);  

return authService.isLoggedIn$.pipe(
  map((isLogged) => !isLogged ? router.parseUrl('/login') : true))


};