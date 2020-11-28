import { LancamentosPresenter } from './lancamentos-presenter';
import { map } from 'rxjs/operators';
import { GlobalPresenter } from './../../../global-presenter';
import { noop } from 'rxjs';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-container',
  templateUrl: './lancamentos-container.component.html',
  styleUrls: ['./lancamentos-container.component.scss']
})
export class LancamentosContainerComponent implements OnInit {
  public user: any;
  public loading: boolean = true;
  constructor(
    private universalService: UniversalService,
    private globalPresenter: GlobalPresenter,
    private presenter: LancamentosPresenter
  ) { }

  ngOnInit() {
  }

  async getUserData() {
    await this.globalPresenter.setData$.pipe(
      map(response => {
        if (response) {
          this.user = response
          this.getLaunchs(this.user)
        }
      })
    ).subscribe(noop, err => console.log(err))
  }
 async getLaunchs(user){
   this.universalService.getAllData('lancamentos').pipe(
     map(response => {
       if (response) {
         this.presenter.setData(response)
         this.loading = false;
       }

     })
   ).subscribe(noop, err => console.log(err))
  }
}
