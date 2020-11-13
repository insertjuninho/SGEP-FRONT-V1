import { SaidaPresenter } from './saida-container/saida-presenter';
import { SaidaContainerComponent } from './saida-container/saida-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SaidaContainerComponent
  },
];

@NgModule({
  declarations: [
    SaidaContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    SaidaPresenter
  ]
})
export class LancarSaidaModule { }
