import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RoomService } from '../services/room.service';
import { Room } from '../models/hotels';
import { ApihttpService } from '../services/apihttp.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rooms',
  imports: [RouterModule, FormsModule, CommonModule
  ],
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
  priceRange = 0;
  roomType = 0;
  startDate = new Date();
  endDate = new Date();
  guestsNumber!: number;

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
  filterwytype(id: number) {
    this.roomType = id
    this.http
      .postData('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', {
        roomTypeId: id,
      })
      .subscribe((resp: any) => {
        console.log(resp);

        this.rooms = resp;
      });
  }
  all() {
    this.roomType = 0
    this.roomApi
      .getRoomdata('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
      .subscribe((resp: any) => {
        console.log(resp);

        this.rooms = resp;
      });
  }

  filter() {
   if(this.startDate < this.endDate && new Date().getTime() <= new Date(this.startDate).getTime() ){
    
     this.http
      .postData('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', {
        roomTypeId: this.roomType,
        priceFrom : 0,
        priceTo :  this.priceRange,
        maximumGuests : this.guestsNumber,
        checkIn : this.startDate,
        checkOut : this.endDate
      })
      .subscribe((resp: any) => {
        console.log(resp);

        this.rooms = resp;
      });
   }
   else{
    alert("dates are not allowed")
   }
  }
}


