import { Component } from '@angular/core';
import { CommonfunctionService } from '../services/commonfunction.service';
import { ApihttpService } from '../services/apihttp.service';
import { CommonModule } from '@angular/common';
import { Hotels } from '../models/hotels';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
})
export class HotelsComponent {
  constructor(
    private commonfun: CommonfunctionService,
    private http: ApihttpService
  ) {}

  hotel = new Hotels();

  ngOnInit() {
    this.http
      .getData('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
      .subscribe((resp: any) => {
        console.log(resp);
        this.hotelarr = resp;
      });
    this.http
      .getData('https://hotelbooking.stepprojects.ge/api/Hotels/GetCities')
      .subscribe((resp: any) => {
        console.log(resp);
        this.cities = resp;
      });
  }

  hotelarr: Hotels[] = [];
  cities: any[] = [];
}
