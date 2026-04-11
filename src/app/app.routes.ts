import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AuthRoutes)
    },
    {
        path: '',
        loadChildren: () => import('./features/user/user.routes').then((m) => m.UserRoutes)
    },
   
];
