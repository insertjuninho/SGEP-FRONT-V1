import { AlertUtilitys } from './../../../shared/utils/alert-utilitys';
import { GlobalPresenter } from './../../../global-presenter';
import { map } from 'rxjs/operators';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-entrada-container',
  templateUrl: './entrada-container.component.html'
})
export class EntradaContainerComponent implements OnInit {
  public user: any;
  constructor(
    public universalService: UniversalService,
    private globalPresenter: GlobalPresenter,
    private alertUtilitys: AlertUtilitys
  ) { }

  ngOnInit() {
    this.getUserData()
  }
  async getUserData(){
    await this.globalPresenter.setData$.pipe(
      map(response => {
        if(response){
          this.user = response
        }
      })
    ).subscribe(noop, err => console.log(err))
  }

  sendForm(value){
    this.alertUtilitys.loading('Cadastrando...');
    this.universalService.lancarEntrada(this.user.id).pipe(
      map(response =>{
        console.log(response)
        this.alertUtilitys.showMsg('success', 'Sucesso', 'Entrada registrada', 'Ok');
      })
    ).subscribe(noop, err=> {
      this.alertUtilitys.showMsg('error', `Erro ${err.status}`, err.error.message, 'Ok');
    })
  }
}
