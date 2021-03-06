import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HomePresenter } from './../home-presenter';
import * as moment from 'moment'
@Component({
  selector: 'view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {
  @Input() user: any;
  public entradas: Array<any> = []
  public saidas: Array<any> = []
  
  @Input() currentPage: number;
  @Input() ItensPerPage: number;
  @Input() loading: boolean;
  
  @Input() currentPageOut: number;
  @Input() ItensPerPageOut: number;
  @Output() page = new EventEmitter();
  @Output() pageOut = new EventEmitter();
  constructor(
    private presenter: HomePresenter
    
  ) { }

  ngOnInit() { 
    this.presenter.setData$.subscribe(result =>{
      if(result){
       result.forEach(element => {
         let dtHrEntrada = {
           data: element.data,
           hora: element.horaEntrada ? moment().format(element.horaEntrada) : null
         }
         let dtHrSaida = {
           data: element.data,
           hora: element.horaSaida ? moment().format(element.horaSaida): null
          }
         this.entradas.push(dtHrEntrada)
         this.saidas.push(dtHrSaida)
        });        
      }
    })
  }


  

}
