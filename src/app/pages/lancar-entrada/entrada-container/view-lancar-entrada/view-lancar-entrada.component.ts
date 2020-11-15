import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
@Component({
  selector: 'view-lancar-entrada',
  templateUrl: './view-lancar-entrada.component.html',
  styleUrls: ['./view-lancar-entrada.component.scss']
})
export class ViewLancarEntradaComponent implements OnInit {
  public validaFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validaForm();
  }

  validaForm() {
    this.validaFormGroup = this.fb.group({
      hora: ['', Validators.required],
      data: ['', Validators.required],
      motivo: ['', Validators.required],
      obs: [''],
    });
  }

  setNow(){ 
    let now = moment().format(); 
    this.validaFormGroup.controls['hora'].setValue(now)
    this.validaFormGroup.controls['data'].setValue(now)
  }

  sendData(){
    console.log(this.validaFormGroup.value)
    if (this.validaFormGroup.valid){

    }
  }

}
