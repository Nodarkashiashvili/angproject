import { Component } from '@angular/core';
import { Room } from '../models/hotels';
import { RoomService } from '../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [CommonModule ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomApi: RoomService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  id!: number;
  room!: Room 

  ngOnInit() {
    this.roomApi
      .getRoomdata(
        `https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${this.id}`
      )
      .subscribe((resp: any) => {
        console.log(resp);

        this.room = resp;
      });
  }
}
