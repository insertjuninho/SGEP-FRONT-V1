import { map } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GlobalPresenter } from 'src/app/global-presenter';

@Component({
  selector: 'view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {
  public user: any;
  constructor(
    private globalPresenter: GlobalPresenter
  ) { }

  ngOnInit() {
    this.getUserData()
  }


  async getUserData(){
    await this.globalPresenter.setData$.pipe(
      map(response => {
        if(response){
          this.user = response
          console.log(response)
        }
      })
    ).subscribe(noop, err => console.log(err))
  }

}
