import { FuncionariosPresenter } from './../../funcionarios-presenter';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'view-funcionarios',
  templateUrl: './view-funcionarios.component.html',
  styleUrls: ['./view-funcionarios.component.scss']
})
export class ViewFuncionariosComponent implements OnInit {
  public accordionIndex: number = null;
  public toggle: boolean = false;
  public funcionarios: Array<any> = []
  
  @Input() loading: boolean;
  @Input() currentPage: number;
  @Input() ItensPerPage: number;
  @Output() page = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  public filter: any  = {nome: ''}
  constructor(
    private funcionariosPresenter: FuncionariosPresenter
  ) { }

  ngOnInit() { 
    this.funcionariosPresenter.setData$.subscribe(response =>{
      if(response){
        this.funcionarios = response
      }
    })
  }

  filterBy(event){

    this.filter = {nome: event.target.value}
  }
  // TOGGLE ACCORDEON FOR MOBILE
  toggleInfo(i) {
    this.accordionIndex = i
    this.toggle = !this.toggle
    this.accordionIndex = this.toggle ? i : null
  }

}
