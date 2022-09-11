import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
  logout(){
    this.router.navigate(['/'])
    localStorage.clear()
  }
  
}