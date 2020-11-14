import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosContainerComponent } from './funcionarios-container/funcionarios-container.component';
import { ViewFuncionariosComponent } from './funcionarios-container/view-funcionarios/view-funcionarios.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FuncionariosContainerComponent
  },
];
@NgModule({
  declarations: [
    FuncionariosContainerComponent, 
    ViewFuncionariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FuncionariosModule { }
