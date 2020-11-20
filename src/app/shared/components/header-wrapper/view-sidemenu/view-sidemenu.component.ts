import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { AuthAPIService } from 'src/app/shared/services/auth.service';
import { Config } from '../../../../app.config';
import Swal from "sweetalert2";
import { GlobalPresenter } from 'src/app/global-presenter';
import { noop } from 'rxjs';

@Component({
  selector: 'view-sidemenu',
  templateUrl: './view-sidemenu.component.html'
})
export class ViewSidemenuComponent implements OnInit {
  @Input() showSide: boolean
  @Input() isAuth: boolean
  @Output() toggleSideMenu = new EventEmitter()
  @Output() selectedItemMenuChanged = new EventEmitter(true)
  public userData: any;

  public param: string;
  public selectedItem: string;

  public pages: Array<{ title: string; icon: string; url: string, permision: boolean }> = [
    {
      title: "Home",
      icon: "fas fa-home",
      url: "home",
      permision: true,
    },
    {
      title: "Lançar Entrada",
      icon: "fas fa-calendar-plus",
      url: "lancar-entrada",
      permision: true,
    },
    {
      title: "Lançar Saída",
      icon: "fas fa-calendar-minus",
      url: "lancar-saida",
      permision: true,
    },
    // {
    //   title: "Funcionários",
    //   icon: "fas fa-users",
    //   url: "funcionarios",
    //   permision: true,
    // },
    // {
    //   title: "Sair",
    //   icon: "fa fa-sign-out-alt",
    //   url: "logout",
    //   permision: true,
    // }
  ]
  constructor(
    private location: Location,
    public router: Router,
    protected authService: AuthAPIService,
    public globalPresenter: GlobalPresenter,
    public config: Config) { }

  ngOnInit() {
    this.param = this.location.path()
    this.checkParams(this.isAuth)
    this.sendPageToHeader();

    this.globalPresenter.setData$.pipe(
      map(response =>{
        if(response){
          this.userData = response
        }
      })
    ).subscribe(noop, err=> console.log(err))
  }

  checkParams(bool) {
    if(bool){
      switch (this.param) {
        case "/login":
          this.selectedItem = "";
          break;
        case "":
          this.selectedItem = "home";
        case "/home":
          this.selectedItem = "home";
          break;
        case "/lancar-entrada":
          this.selectedItem = "lancar-entrada";
          break;
        case "/lancar-saida":
          this.selectedItem = "lancar-saida";
          break;
        case "/funcionarios":
          this.selectedItem = "funcionarios";
          break;
  
        default:
          break;
      }
    }
  }
  hideSide() {
    this.showSide = !this.showSide;
    console.log('eventr')
    this.toggleSideMenu.emit(this.showSide);
  }
  openPage(page) {
    if(this.isAuth){
      switch (page.url) {
        case "logout":
          this.logout();
          break;
  
        default:
          this.router.navigate([page.url]);
          this.selectedItem = page.url;
          break;
      }
      this.sendPageToHeader();
    }

  }
  openEmployersPage(){
    this.router.navigate(['funcionarios']);
    this.selectedItem = 'funcionarios';
  }
  sendPageToHeader() {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].url == this.selectedItem) {
        this.selectedItemMenuChanged.emit(this.pages[i].title);
      }
    }
  }
  logout() {
    Swal.fire({
      title: "Tem certeza que deseja fazer logout?",
      type: "warning",
      //
      showCancelButton: true,
      customClass: "app-swal",
      confirmButtonClass: "primary-button",
      cancelButtonClass: "secundary-button",
      //
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        this.authService.logOut();
      }
    });
    // this.authService.logOut();
  }

}
