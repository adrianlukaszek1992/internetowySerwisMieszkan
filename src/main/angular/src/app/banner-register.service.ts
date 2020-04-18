import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerRegisterService {

  constructor() { }

  public latitude: number;
  public longitude: number;
  public fullAdress: string;

}
