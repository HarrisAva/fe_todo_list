import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { noAuthGuard } from './no-auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: 'todo-list',
    loadComponent: () => import('./todo-list/todo-list.component').then((c) => c.TodoListComponent),
    canActivate: [authGuard],
  },
];
