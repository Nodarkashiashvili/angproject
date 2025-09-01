import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonfunctionService } from '../services/commonfunction.service';
import { ApihttpService } from '../services/apihttp.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private commonfun: CommonfunctionService,
    private http: ApihttpService,
    private router : Router
  ) {}
  
  ngOnInit(){
    console.log('hi')
    this.http.getData('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll').subscribe((resp : any)=> {
      console.log(resp)
    })
  }
  gotohotel(){
    this.router.navigateByUrl('/hotels')

  }
}
