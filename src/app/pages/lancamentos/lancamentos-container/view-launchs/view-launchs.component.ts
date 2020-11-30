import { LancamentosPresenter } from './../lancamentos-presenter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-launchs',
  templateUrl: './view-launchs.component.html',
  styleUrls: ['./view-launchs.component.scss']
})
export class ViewLaunchsComponent implements OnInit {
  private listaLancamentos: any = this.presenter.setData$
  @Input() loading: boolean;
  constructor(
    private presenter: LancamentosPresenter
  ) { }

  ngOnInit() {
  }

}
