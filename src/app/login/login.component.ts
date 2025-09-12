import { Component } from '@angular/core';
import { ApihttpService } from '../services/apihttp.service';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

constructor (private http : ApihttpService, private router : Router,
   private auth : AuthService){}



phone!: string;
password!: string;


  login(){
     {
    this.http.postData('https://rentcar.stepprojects.ge/api/Users/login',{
      phoneNumber : this.phone,
      password : this.password,
    }).subscribe((resp : any)=> {
      console.log(resp)
      alert('Loged Succesfully')
       localStorage.setItem('token',resp.token)
       this.auth.logIn()
      this.router.navigateByUrl('/bookedrooms')

    })
   
  }

}
}