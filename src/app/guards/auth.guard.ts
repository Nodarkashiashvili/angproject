import { Token } from '@angular/compiler';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';


export const authGuard: CanActivateFn = (route, state) => {

let router = inject(Router)

  // return false;
  let token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    router.navigateByUrl('/register')
    Swal.fire({
  title: 'Hello!',
  text: 'You Need to Log in oR Registry',
  icon: 'error',
  confirmButtonText: 'Registry'
})
    // alert('please register')
    return false;
  }
};
