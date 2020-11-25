import { ModalEditEmployersComponent } from './modal-edit-employers/modal-edit-employers.component';
import { AlertUtilitys } from './../../../shared/utils/alert-utilitys';
import { FuncionariosPresenter } from './../funcionarios-presenter';
import { map } from 'rxjs/operators';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { noop } from 'rxjs';
import Swal from "sweetalert2";
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-funcionarios-container',
  templateUrl: './funcionarios-container.component.html'
})
export class FuncionariosContainerComponent implements OnInit {
  public currentPage: number = 1;
  public ItensPerPage: number = 6;
  public loading: boolean = true;
  public addForm: boolean = false;
  constructor(
    private universalService: UniversalService,
    private funcionariosPresenter: FuncionariosPresenter,
    public alertUtilitys: AlertUtilitys,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEmployers()
  }

  changePage(page) {
    this.currentPage = page
  }
  getEmployers() {
    this.universalService.getData('', '').pipe(
      map(response => {
        this.funcionariosPresenter.setData(response)
        this.loading = false;
      })
    ).subscribe(noop, err => console.log(err))
  }

  edit(obj) {
    const dialogRef = this.dialog.open(ModalEditEmployersComponent, {
      width: '80vw',
      minHeight: '50vh',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loading = true
      if(result == 'true'){
        this.getEmployers()
      }else{
        this.loading = false
      }
    });
  }
  delete(id) {
    Swal.fire({
      title: "Tem certeza que deseja excluir?",
      type: "warning",
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      showCancelButton: true,
      customClass: {
        container: 'app-swal',
        confirmButton: "primary-button",
        cancelButton: "secundary-button",
      }
    }).then(result => {
      if (result.dismiss) {
        return;
      } else if (result.value == true) {
        this.alertUtilitys.loading('Deletando...');
        if (result) {
          this.universalService.deleteData(id).pipe(
            map(response => {
              if (response){
                this.alertUtilitys.showMsg('success', 'Sucesso', 'Funcionario deletado com sucesso', 'Ok');
                this.loading = true
                this.getEmployers()
              }
            })
          ).subscribe(noop, err => {
            console.log(err)
            this.alertUtilitys.showMsg('error', `Erro ${err.status}`, err.error.message, 'Ok');
          })
        }
      }
    });
  }

}