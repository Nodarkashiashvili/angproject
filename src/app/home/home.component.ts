import { Component, input } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonfunctionService } from '../services/commonfunction.service';
import { ApihttpService } from '../services/apihttp.service';
import { Hotels, Room } from '../models/hotels';
import { CommonModule } from '@angular/common';
import { RoomService } from '../services/room.service';


@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
[x: string]: any;
  constructor(
    private commonfun: CommonfunctionService,
    private http: ApihttpService,
    private router: Router,
    private roomApi : RoomService,
  ) {}
  
 

  
  rooms : Room[] = []
  ngOnInit(){
    console.log('hi')
    this.roomApi.getRoomdata('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll').subscribe((resp:any) => {
      console.log(resp)

      this.rooms = resp.slice(0,6)
    })
    

 
  }
  gotohotel(){
    this.router.navigateByUrl('/hotels')

  }
    hotelobj = new Hotels
    


    cunrentDate = new Date()

}
