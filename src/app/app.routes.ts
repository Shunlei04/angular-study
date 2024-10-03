import { Routes } from '@angular/router';
import { SigninComponent } from './apps/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    pathMatch: 'full',
    component: SigninComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./apps/home/home.component').then((c) => c.HomeComponent),
  },
];
