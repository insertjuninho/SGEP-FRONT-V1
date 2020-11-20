import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Config } from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  constructor(public httpClient: HttpClient, public config: Config) { }

  //GET
  public getData(param, id): Observable<any> {
    return this.httpClient.get<any>(this.config.baseUrl + `funcionario/${id}/${param}`);
  }
  //POST
  public lancarEntrada(data,id): Observable<Response> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<Response>(this.config.baseUrl + `funcionario/${id}/jornada`, data, {headers});
  }
  public lancarSaida(data,id): Observable<Response> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put<Response>(this.config.baseUrl + `funcionario/${id}/jornada`, data, {headers});
  }
  //PUT
  public editData(newData, id): Observable<Response> {
    return this.httpClient.put<Response>(this.config.baseUrl + `funcionario/${id}`, newData);
  }

  //DELETE
  public deleteData(id): Observable<Response> {
    return this.httpClient.delete<Response>(this.config.baseUrl + `funcionario/${id}`)
  }


}
