import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimations(),
    providePrimeNG({
      ripple: true,
      theme:{
        preset:aura,
        options:{
          darkModeSelector: '.dark'
        }
      }
    }),
    MessageService,
  ]
};
