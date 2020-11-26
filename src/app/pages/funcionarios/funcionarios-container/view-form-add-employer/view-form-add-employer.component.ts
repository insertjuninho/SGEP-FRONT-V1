import { map } from 'rxjs/operators';
import { AlertUtilitys } from './../../../../shared/utils/alert-utilitys';
import { UniversalService } from 'src/app/services/universal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { noop } from 'rxjs';
import Swal from "sweetalert2";
@Component({
  selector: 'view-form-add-employer',
  templateUrl: './view-form-add-employer.component.html',
  styleUrls: ['./view-form-add-employer.component.scss']
})
export class ViewFormAddEmployerComponent implements OnInit {
  @Output() openForm = new EventEmitter();
  @Output() refresh = new EventEmitter();
  public validaFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    public universalService: UniversalService,
    public alertUtilitys: AlertUtilitys
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
      diafolga: ['', Validators.required],
    });
  }

  sendForm(){
    if(this.validaFormGroup.valid){
      this.universalService.addData(this.validaFormGroup.value).pipe(
        map(repsonse => {
          this.alertUtilitys.loading('Cadastrando...');
          if (repsonse) {
            Swal.fire({
              title: "Funcionario Cadastrado",
              type: "success",
              confirmButtonText: 'Ok',
              showCancelButton: false,
              customClass: {
                container: 'app-swal',
                confirmButton: "primary-button",
              }
            }).then(() => {
              this.openForm.emit(false);
              this.refresh.emit(true);
            });
          }
        })
      ).subscribe(noop, erro => {
        this.alertUtilitys.showMsg('error', 'ERRO', 'Ocorreu um erro ao cadastrar!', 'Ok');
      })
    }
  }

}
