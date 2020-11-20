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
  public loading: boolean = true;

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
    this.getUserData()
  }

  async getUserData(){
    await this.globalPresenter.setData$.pipe(
      map(response => {
        if(response){
          this.user = response
          this.getDatas(this.user)
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

 async getDatas(user){
   this.universalService.getData('lancamentos', await user.id).pipe(
     map(response =>{
       if (response){
        this.presenter.setData(response)
         this.loading = false;
       }

     })
   ).subscribe(noop, err => console.log(err))
  }

}
