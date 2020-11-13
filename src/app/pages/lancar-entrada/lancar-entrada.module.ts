import { RouterModule, Routes } from '@angular/router';
import { EntradaContainerComponent } from './entrada-container/entrada-container.component';
import { EntradaPresenter } from './entrada-container/entrada-presenter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: EntradaContainerComponent
  },
];


@NgModule({
  declarations: [
    EntradaContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    EntradaPresenter
  ]
})
export class LancarEntradaModule { }
