import { AlertUtilitys } from './../../shared/utils/alert-utilitys';
import { GlobalPresenter } from 'src/app/global-presenter';
import { UniversalService } from './../../services/universal.service';
import { FdModule } from './../../shared/module/fd.module';
import { SaidaPresenter } from './saida-container/saida-presenter';
import { SaidaContainerComponent } from './saida-container/saida-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewLancarSaidaComponent } from './saida-container/view-lancar-saida/view-lancar-saida.component';

const routes: Routes = [
  {
    path: '',
    component: SaidaContainerComponent
  },
];

@NgModule({
  declarations: [
    SaidaContainerComponent,
    ViewLancarSaidaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FdModule
  ],
  providers: [
    SaidaPresenter,
    UniversalService,
    AlertUtilitys
  ]
})
export class LancarSaidaModule { }
