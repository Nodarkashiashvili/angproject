import { Injectable } from '@angular/core';
import { ApihttpService } from './apihttp.service';
import { Room } from '../models/hotels';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apihttp : ApihttpService) { }


  room!: Room
  getRoomdata(url : string){
    this.apihttp.getData(url)  
     .subscribe((resp : any)=> {
      console.log(resp)
      this.room = resp;
      

    })
  }
}
