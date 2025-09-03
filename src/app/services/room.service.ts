import { Injectable } from '@angular/core';
import { ApihttpService } from './apihttp.service';
import { Room } from '../models/hotels';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private apihttp: ApihttpService) {}

  getRoomdata(url: string) {
    return this.apihttp.getData(url);
  }
}
