import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated = false
  constructor() { }
  isLoggedin(){
    return this.isAuthenticated = true
  }
  logout(){
    return this.isAuthenticated = false
  }
}
