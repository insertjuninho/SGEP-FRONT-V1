import { NgxMaskModule } from 'ngx-mask';
import { AlertUtilitys } from './../../shared/utils/alert-utilitys';
import { FuncionariosPresenter } from './funcionarios-presenter';
import { UniversalService } from './../../services/universal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosContainerComponent } from './funcionarios-container/funcionarios-container.component';
import { ViewFuncionariosComponent } from './funcionarios-container/view-funcionarios/view-funcionarios.component';
import { Routes, RouterModule } from '@angular/router';
import { FdModule } from 'src/app/shared/module/fd.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ModalEditEmployersComponent } from './funcionarios-container/modal-edit-employers/modal-edit-employers.component';
import { MatDialogModule } from '@angular/material';
import { ViewFormAddEmployerComponent } from './funcionarios-container/view-form-add-employer/view-form-add-employer.component';
const routes: Routes = [
  {
    path: '',
    component: FuncionariosContainerComponent
  },
];
@NgModule({
  declarations: [
    FuncionariosContainerComponent, 
    ViewFuncionariosComponent, ModalEditEmployersComponent, ViewFormAddEmployerComponent
  ],
  imports: [
    CommonModule,
    FdModule,
    RouterModule.forChild(routes),
    FilterPipeModule,
    MatDialogModule,
    NgxMaskModule.forRoot(),

  ],
  providers:[
    UniversalService,
    FuncionariosPresenter,
    AlertUtilitys
  ],
  entryComponents:[
    ModalEditEmployersComponent
  ]
})
export class FuncionariosModule { }
