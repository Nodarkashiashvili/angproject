import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApihttpService } from '../services/apihttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {




  constructor(private http : ApihttpService, private  router : Router){}







  phone!: string;
  password!: string;

  register() {
    this.http.postData('https://rentcar.stepprojects.ge/api/Users/register',{
      phoneNumber : this.phone,
      password : this.password,
  

    }).subscribe((resp : any)=> {
      console.log(resp)
      alert('SuccesFull')
      this.router.navigateByUrl('/login')

    })
    // localStorage.setItem('token', 'token');
  }

  // {
  //   "phoneNumber": "string",
  //   "phoneNumber": "string",
  //   "email": "string",
  //   "firstName": "string",
  //   "lastName": "string",
  //   "role": "string"
  // }

  // https://rentcar.stepprojects.ge/api/Users/register
}
