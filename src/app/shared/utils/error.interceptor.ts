import { AlertUtilitys } from './alert-utilitys';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor( public alertUtility: AlertUtilitys,
                public router: Router,) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError(err => {
            console.log('ERROR INTERCEPTOR', err.status)
            if (err.status !== 500) {

                

            } else {

                this.router.navigate(['manutencao'], {queryParamsHandling: 'merge'});

                return throwError('err');

            }

            // return throwError('err');
            
        }))
    }
}