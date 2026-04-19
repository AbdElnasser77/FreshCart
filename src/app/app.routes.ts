import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { isloggedinGuard } from './core/guards/isloggedin-guard';

export const routes: Routes = [
    {
    path: '',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AuthRoutes),
    canActivate: [isloggedinGuard],
  },
  {
    path: '',
    loadChildren: () => import('./features/user/user.routes').then((m) => m.UserRoutes),
    canActivate: [authGuard],
  },

];
