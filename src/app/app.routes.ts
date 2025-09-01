import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'',
       redirectTo: 'home', 
       pathMatch:'full'
    },


    {path: 'home', 
    loadComponent:()=>import('./home/home.component').then(p=>p.HomeComponent)

    },
    {
        path: 'rooms',
        loadComponent:()=>import('./rooms/rooms.component').then(p=>p.RoomsComponent)
    },
    {
        path: "hotels",
        loadComponent:()=>import('./hotels/hotels.component').then(p=>p.HotelsComponent)
    },
    {path: 'bookedrooms',
        loadComponent:()=>import('./bookedrooms/bookedrooms.component').then(p=>p.BookedroomsComponent)

    },
    {path: '**',
        component : ErrorComponent

    },





];
