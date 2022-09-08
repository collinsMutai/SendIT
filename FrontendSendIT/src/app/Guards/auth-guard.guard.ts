import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService){}
  canActivate(){
    if(this.authService.isLoggedIn()){
      return true
    }
    else{
      return false
    }
  }
  
}
