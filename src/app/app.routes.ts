import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'agregar-tareas',
    loadComponent: () => import('./pages/agregar-tareas/agregar-tareas.page').then( m => m.AgregarTareasPage)
  },
  {
    path: 'detalles-tareas',
    loadComponent: () => import('./pages/detalles-tareas/detalles-tareas.page').then( m => m.DetallesTareasPage)
  },
  {
    path: 'editar-tareas',
    loadComponent: () => import('./pages/editar-tareas/editar-tareas.page').then( m => m.EditarTareasPage)
  },
  {
    path: 'listar-tareas',
    loadComponent: () => import('./pages/listar-tareas/listar-tareas.page').then( m => m.ListarTareasPage)
  },
];
