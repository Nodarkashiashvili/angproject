import { Component } from '@angular/core';
import { ApihttpService } from '../services/apihttp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookedrooms',
  imports: [CommonModule],
  templateUrl: './bookedrooms.component.html',
  styleUrl: './bookedrooms.component.scss'
})
export class BookedroomsComponent {
constructor (private http : ApihttpService){}

ngOnInit(){
  this.http.getData('https://hotelbooking.stepprojects.ge/api/Booking')
  .subscribe((resp : any)=>{
    console.log(resp)
    this.booked=resp.slice(resp.length-7,resp.length-1)
    console.log(this.booked)
  })
}
booked : any [] = []

}
