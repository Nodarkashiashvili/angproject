import { Component } from '@angular/core';
import { Room } from '../models/hotels';
import { RoomService } from '../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApihttpService } from '../services/apihttp.service';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomApi: RoomService,
    private http: ApihttpService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  id!: number;
  room!: Room;

  startDate = new Date();
  endDate = new Date();
  name = '';
  phoneNumber = '';

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

  bookRoom(id: number) {
    this.http
      .postDataByText('https://hotelbooking.stepprojects.ge/api/Booking', {
        roomID: id,
        checkInDate: this.startDate,
        checkOutDate: this.endDate,
        totalPrice: this.room.pricePerNight,
        isConfirmed: true,
        customerName: this.name,
        customerId: '',
        customerPhone: this.phoneNumber,
      })
      .subscribe((resp) =>{
         console.log(resp.split(" ")[5])
         localStorage.setItem('bookedId', resp.split(" ")[5])
      });

  }

}
