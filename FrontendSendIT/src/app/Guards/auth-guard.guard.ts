import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService, private router: Router){}
 
  canActivate(){
    if(localStorage.getItem('role') === 'admin'){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
  canLoad(){
    if(this.authService.isLoggedIn()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}