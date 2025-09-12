import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RoomService } from '../services/room.service';
import { Room } from '../models/hotels';
import { ApihttpService } from '../services/apihttp.service';

@Component({
  selector: 'app-rooms',
  imports: [RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  constructor(
    private router: Router,
    private http: ApihttpService,

    private route: ActivatedRoute,
    private roomApi: RoomService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  id!: number;
  rooms: Room[] = [];
  ngOnInit() {
    if (this.id) {
      this.roomApi
        .getRoomdata(
          `https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${this.id}`
        )
        .subscribe((resp: any) => {
          console.log(resp);

          this.rooms = resp.rooms;
        });
    } else {
      this.roomApi
        .getRoomdata('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
        .subscribe((resp: any) => {
          console.log(resp);

          this.rooms = resp;
        });
    }
  }
filterwytype(id:number){
this.http.postData('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', {
  roomTypeId : id
}).subscribe((resp: any) => {
          console.log(resp);

          this.rooms = resp;
        });

  

}
all(){
  this.roomApi
        .getRoomdata('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
        .subscribe((resp: any) => {
          console.log(resp);

          this.rooms = resp;
        });

}

}
