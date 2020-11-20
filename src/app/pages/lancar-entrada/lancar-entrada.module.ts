import { AlertUtilitys } from './../../shared/utils/alert-utilitys';
import { UniversalService } from './../../services/universal.service';
import { FdModule } from './../../shared/module/fd.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaContainerComponent } from './entrada-container/entrada-container.component';
import { EntradaPresenter } from './entrada-container/entrada-presenter';
import { ViewLancarEntradaComponent } from './entrada-container/view-lancar-entrada/view-lancar-entrada.component';

const routes: Routes = [
  {
    path: '',
    component: EntradaContainerComponent
  },
];


@NgModule({
  declarations: [
    EntradaContainerComponent,
    ViewLancarEntradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FdModule

  ],
  providers: [
    EntradaPresenter,
    UniversalService,
    AlertUtilitys
  ]
})
export class LancarEntradaModule { }
