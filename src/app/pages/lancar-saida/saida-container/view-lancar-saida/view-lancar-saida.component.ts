import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'view-lancar-saida',
  templateUrl: './view-lancar-saida.component.html',
  styleUrls: ['./view-lancar-saida.component.scss']
})
export class ViewLancarSaidaComponent implements OnInit {

  public validaFormGroup: FormGroup;
  @Input() user: any;
  @Output() sendForm = new EventEmitter()
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validaForm()
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

      let hora = moment(this.validaFormGroup.value['hora']).format('HH:mm')
      let data = moment(this.validaFormGroup.value['data']).format('DD/MM/YYYY')
      let payload = {
        aprovacao: '',
        data: data,
        funcionario: `${this.user.nome} ${this.user.sobrenome}`,
        horaBanco: moment().format(),
        horaEntrada: hora,
        horaExtra: null,
        horaSaida: null,
        id: this.user.id,
        observacao: this.validaFormGroup.value['obs'],
      }
      this.sendForm.emit(payload)
    }
  }
}
