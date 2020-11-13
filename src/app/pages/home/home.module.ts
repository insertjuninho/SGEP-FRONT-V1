import { HomePresenter } from './home-container/home-presenter';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
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
    RouterModule.forChild(routes),
  ],
  providers: [
    HomePresenter
  ]
})
export class HomeModule { }
