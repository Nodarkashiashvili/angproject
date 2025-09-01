import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  ) {}
}
