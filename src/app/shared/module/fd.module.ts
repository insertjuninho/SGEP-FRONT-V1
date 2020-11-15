import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,

    //MATERIAL
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,

    //MATERIAL
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'pt-br' },
  ]
})
export class FdModule { }
