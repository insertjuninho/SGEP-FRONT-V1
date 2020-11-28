import { LancamentosPresenter } from './lancamentos-container/lancamentos-presenter';
import { FdModule } from './../../shared/module/fd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosContainerComponent } from './lancamentos-container/lancamentos-container.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewLaunchsComponent } from './lancamentos-container/view-launchs/view-launchs.component';

const routes: Routes = [
  {
    path: '',
    component: LancamentosContainerComponent
  },
];
@NgModule({
  declarations: [LancamentosContainerComponent, ViewLaunchsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FdModule
  ],
  providers: [LancamentosPresenter]
})
export class LancamentosModule { }
