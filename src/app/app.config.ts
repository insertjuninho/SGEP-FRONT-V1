import { Injectable } from "@angular/core";

@Injectable()
export class Config {

  // LOCAL
  public baseUrl = "https://sgep-ws.herokuapp.com/";
  // public baseUrl = "http://localhost/api-syscard/";

  // Misc
  public version: string = "0.1.1";
}