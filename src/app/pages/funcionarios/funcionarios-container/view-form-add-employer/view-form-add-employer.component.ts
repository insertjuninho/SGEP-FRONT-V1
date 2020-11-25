import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-form-add-employer',
  templateUrl: './view-form-add-employer.component.html',
  styleUrls: ['./view-form-add-employer.component.scss']
})
export class ViewFormAddEmployerComponent implements OnInit {
  @Output() openForm = new EventEmitter();
  public validaFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.validaForm()
  }

  validaForm() {
    this.validaFormGroup = this.fb.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      privilegio: ['', Validators.required],
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      senha: ['', Validators.required],
      centroCusto: ['', Validators.required],
      nomeSetor: ['', Validators.required],
    });
  }

}
