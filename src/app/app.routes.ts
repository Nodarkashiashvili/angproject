import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';

export const routes: Routes = [


    {path: 'home', 
        component: HomeComponent

    },
    {
        path: 'rooms',
        component : RoomsComponent
    },
    {
        path: "hotels",
        component: HotelsComponent
    },
    {path: 'bookedrooms',
        component: BookedroomsComponent

    },





];
