import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalPresenter } from './../../../global-presenter';
import { UniversalService } from './../../../services/universal.service';
import { HomePresenter } from './home-presenter';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  public user: any;

  //PAGINAÇÃO ENTRADAS
  public currentPage: number = 1;
  public ItensPerPage: number = 4;
  //PAGINAÇÃO SAIDAS
  public currentPageOut: number = 1;
  public ItensPerPageOut: number = 4;
  constructor(
    private universalService: UniversalService,
    private globalPresenter: GlobalPresenter,
    private presenter: HomePresenter
  ) { }

  ngOnInit() {
    this.getDatas()
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

  changePage(page){
    this.currentPage = page
  }
  changePageOut(page){
    this.currentPageOut = page
  }

 async getDatas(){
   this.universalService.getData('2/lancamentos').pipe(
     map(response =>{
       let user = response.filter(user => user.funcionario.matricula == this.user.matricula)
       if(user){
        this.presenter.setData(user)
        }else{
          this.presenter.setData(response)
       }
     })
   ).subscribe(noop, err => console.log(err))
  }

}
