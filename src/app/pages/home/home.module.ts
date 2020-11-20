import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdModule } from 'src/app/shared/module/fd.module';
import { UniversalService } from './../../services/universal.service';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomePresenter } from './home-container/home-presenter';
import { ViewHomeComponent } from './home-container/view-home/view-home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
  },
];


@NgModule({
  declarations: [HomeContainerComponent, ViewHomeComponent],
  imports: [
    CommonModule,
    FdModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    HomePresenter,
    UniversalService
  ]
})
export class HomeModule { }
