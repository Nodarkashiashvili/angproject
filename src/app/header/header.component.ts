import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    if(localStorage.getItem('token')){
this.isAuth = true
    }
    
  }

  isAuth = false;
  showmobilemenu = false;

  active = 'active';

  showhidemenu() {
    this.showmobilemenu == false
      ? (this.showmobilemenu = true)
      : (this.showmobilemenu = false);
  }

  hidemenu() {
    this.showmobilemenu = false;
  }
}
