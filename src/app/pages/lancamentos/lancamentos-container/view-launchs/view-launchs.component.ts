import { LancamentosPresenter } from './../lancamentos-presenter';
import { Component, OnInit, Input } from '@angular/core';
import { UniversalService } from 'src/app/services/universal.service';
import { map } from 'rxjs/operators';
import { noop } from 'rxjs';
import { returnJornada } from 'src/app/models/main-models';

@Component({
  selector: 'view-launchs',
  templateUrl: './view-launchs.component.html',
  styleUrls: ['./view-launchs.component.scss']
})
export class ViewLaunchsComponent implements OnInit {
  public listaLancamentos: Array<returnJornada> = [];
  public id: string;
  @Input() loading: boolean;
  constructor(
    private presenter: LancamentosPresenter,
    private universalService: UniversalService,
  ) { }

  ngOnInit() {
    this.getReturnJornada()
  }

  async getReturnJornada(){
    return this.universalService.returnLancamento(this.id).pipe(
      map(response => {
        if (response) {
          console.log(response)
          return response
         }
      })
    ).subscribe(noop,
      err => {
        console.log(err)
      })
  }
}
