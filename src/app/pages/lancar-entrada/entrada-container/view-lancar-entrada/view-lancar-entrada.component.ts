import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
@Component({
  selector: 'view-lancar-entrada',
  templateUrl: './view-lancar-entrada.component.html',
  styleUrls: ['./view-lancar-entrada.component.scss']
})
export class ViewLancarEntradaComponent implements OnInit {
  public validaFormGroup: FormGroup;
  @Input() user: any;
  @Output() sendForm = new EventEmitter()
  constructor(
    private fb: FormBuilder,
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

  setNow() {
    let now = moment().format();
    this.validaFormGroup.controls['hora'].setValue(now)
    this.validaFormGroup.controls['data'].setValue(now)
  }

  sendData() {
    if (this.validaFormGroup.valid) {

      let hora = moment(this.validaFormGroup.value['hora']).format('HH:mm:ss')
      let data = moment(this.validaFormGroup.value['data']).format()
      let payload = {
        aprovacao:	null,
        data: data,
        funcionario:	`${this.user.nome} ${this.user.sobrenome}`,
        horaBanco:	moment().format(),
        horaEntrada:	hora,
        horaExtra:	null,
        horaSaida: null,
        id: this.user.id,
        observacao: this.validaFormGroup.value['obs'],
    }
    this.sendForm.emit(payload)
  }
}

}
