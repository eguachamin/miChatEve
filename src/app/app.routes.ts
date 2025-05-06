import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'formulario',
    component: UserFormComponent
  }
];
