import { Injectable } from '@angular/core';
import { ApihttpService } from './apihttp.service';

@Injectable({
  providedIn: 'root'
})
export class HotelapiService {

  constructor(private apihttp : ApihttpService) { }



  getHoteldata(url : string){
    this.apihttp.getData(url)
  }
}
