import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-funcionarios',
  templateUrl: './view-funcionarios.component.html',
  styleUrls: ['./view-funcionarios.component.scss']
})
export class ViewFuncionariosComponent implements OnInit {
  public accordionIndex: number = null;
  public toggle: boolean = false;
  constructor() { }

  ngOnInit() { }

  // TOGGLE ACCORDEON FOR MOBILE
  toggleInfo(i) {
    this.accordionIndex = i
    this.toggle = !this.toggle
    this.accordionIndex = this.toggle ? i : null
  }

}
