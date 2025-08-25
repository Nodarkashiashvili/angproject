import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showmobilemenu = false
showhidemenu(){
  this.showmobilemenu == false ? this.showmobilemenu = true : this.showmobilemenu = false
}
}
