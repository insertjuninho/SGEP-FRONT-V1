import { AlertUtilitys } from './../../../../shared/utils/alert-utilitys';
import { map } from 'rxjs/operators';
import { UniversalService } from './../../../../services/universal.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { noop } from 'rxjs';
import Swal from "sweetalert2";
@Component({
  selector: 'app-modal-edit-employers',
  templateUrl: './modal-edit-employers.component.html',
  styleUrls: ['./modal-edit-employers.component.scss']
})
export class ModalEditEmployersComponent implements OnInit {
  public validaFormGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalEditEmployersComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public fb: FormBuilder,
    public universalService: UniversalService,
    public alertUtilitys: AlertUtilitys) { }

  ngOnInit() {
    this.validaForm()
  }

  validaForm() {
    this.validaFormGroup = this.fb.group({
      nome: [this.data.nome],
      sobrenome: [this.data.sobrenome],
      email: [this.data.email],
      privilegio: [this.data.privilegio],
      diafolga: [this.data.diafolga],
      nomeSetor: [this.data.setor.nomeSetor],
      centroDeCusto: [this.data.setor.centroCusto]
    })
  }

  send(){
    if(this.validaFormGroup.valid){

      let payload = {
        "cpf": this.data.cpf,
        "diafolga": this.validaFormGroup.value['diafolga'],
        "email": this.validaFormGroup.value['email'],
        "empresa": {
          "cnpj": this.data.empresa.cnpj,
          "id": this.data.empresa.id,
          "razaoSocial": this.data.empresa.razaoSocial
        },
        "id": this.data.id,
        "matricula": this.data.matricula,
        "nome": this.validaFormGroup.value['nome'],
        "privilegio": this.validaFormGroup.value['privilegio'],
        "senha": this.data.senha,
        "setor": {
          "centroCusto": this.validaFormGroup.value['centroDeCusto'],
          "id": this.data.setor.id,
          "nomeSetor": this.validaFormGroup.value['nomeSetor'],
        },
        "sobrenome":  this.validaFormGroup.value['sobrenome'],
        "status": this.data.status
      }
      this.universalService.editData(payload, this.data.id).pipe(
        map(repsonse =>{
          this.alertUtilitys.loading('Editando...');
          if(repsonse){
            Swal.fire({
              title: "Editado com sucesso",
              type: "success",
              confirmButtonText: 'Ok',
              showCancelButton: false,
              customClass: {
                container: 'app-swal',
                confirmButton: "primary-button",
              }
            }).then(() => {
              this.dialogRef.close('true');
            });
          }
        })
      ).subscribe(noop, erro =>{
        this.alertUtilitys.showMsg('error', 'ERRO', 'Ocorreu um erro ao editar!', 'Ok');
      })
    }
  }

}
