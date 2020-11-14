import { DisableGuard } from './shared/guards/disable.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login', 
    loadChildren: () => import('./pages/st-login/login.module').then(m => m.LoginModule),
    canActivate: [DisableGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'lancar-entrada',
    loadChildren: () => import('./pages/lancar-entrada/lancar-entrada.module').then(m => m.LancarEntradaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'lancar-saida',
    loadChildren: () => import('./pages/lancar-saida/lancar-saida.module').then(m => m.LancarSaidaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./pages/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    canActivate: [AuthGuard],
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full', 
    canActivate: [AuthGuard] 
  },
  { 
    path: '**', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
