import { map } from 'rxjs/operators';
import { noop } from 'rxjs';
import { AlertUtilitys } from './../../../shared/utils/alert-utilitys';
import { GlobalPresenter } from 'src/app/global-presenter';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saida-container',
  templateUrl: './saida-container.component.html',
  styleUrls: ['./saida-container.component.scss']
})
export class SaidaContainerComponent implements OnInit {

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
    this.globalPresenter.setData$.pipe(
      map(response => {
        if(response){
          this.user = response
        }
      })
    ).subscribe(noop, err => console.log(err))
  }

  sendForm(value){
    this.universalService.lancarSaida(value, this.user.id).pipe(
      map(response =>{
        console.log(response)
        this.alertUtilitys.showMsg('success', 'Sucesso', 'Saida registrada', 'Ok');
      })
    ).subscribe(noop, err=> {
      this.alertUtilitys.showMsg('error', 'Erro', err.error.message, 'Ok');
    })
  }
  

}
