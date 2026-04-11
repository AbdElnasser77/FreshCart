import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth-service';
import { inject } from '@angular/core';

export const isloggedinGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isLoggedIn) {
    router.navigate(['/products']);
    return false;
  } else {
    return true;
  }
};
