import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalPresenter } from 'src/app/global-presenter';

@Injectable({
  providedIn: 'root'
})
export class EmployersGuard implements CanActivate {
  constructor(private router: Router,
    private globalPresenter: GlobalPresenter) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve) => { this.globalPresenter.setData$.pipe(
      map(data =>{
        if(data){
          let isAdmin = ['ADMIN_GERAL', 'GESTOR'].indexOf(data.privilegio) !== -1
          if (isAdmin){
            resolve(isAdmin)
          }else{
            this.router.navigate(['/']);
            resolve(false);
          }
        }
      })
    ).subscribe()})
  }
  
}
