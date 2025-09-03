import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((p) => p.HomeComponent),
  },
  {
    path: 'rooms',
    loadComponent: () =>
      import('./rooms/rooms.component').then((p) => p.RoomsComponent),
  },
  {
    path: 'rooms/:id',
    loadComponent: () =>
      import('./rooms/rooms.component').then((p) => p.RoomsComponent),
  },
  {
    path: 'booking/:id',
    loadComponent: () =>
      import('./booking/booking.component').then((p) => p.BookingComponent),
  },
  {
    path: 'hotels',
    loadComponent: () =>
      import('./hotels/hotels.component').then((p) => p.HotelsComponent),
  },
  {
    path: 'bookedrooms',
    loadComponent: () =>
      import('./bookedrooms/bookedrooms.component').then(
        (p) => p.BookedroomsComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((p) => p.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((p) => p.LoginComponent),
  },
  { path: '**', component: ErrorComponent },
];
