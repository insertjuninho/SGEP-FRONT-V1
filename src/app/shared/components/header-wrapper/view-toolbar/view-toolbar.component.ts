import { Observable } from 'rxjs';
import { GlobalPresenter } from './../../../../global-presenter';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-toolbar',
  templateUrl: './view-toolbar.component.html'
})
export class ViewToolbarComponent implements OnInit {
  @Input() showSide: boolean;
  @Input() selectedItemFromMenu: string;
  @Output() toggleSideMenu = new EventEmitter();
  public user: Observable<any> = this.globalPresenter.setData$;
  constructor(
   private globalPresenter: GlobalPresenter
  ) { }

  ngOnInit() {

  }

  hideSide() {
    this.showSide = !this.showSide;
    this.toggleSideMenu.emit(this.showSide);
  }

  reload() {
    //sessionStorage.removeItem('mes');
    location.reload()
  }

}
