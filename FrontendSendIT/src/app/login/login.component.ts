import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { loginuser } from '../interfaces/interfaces';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email!: string
password!:string

@ViewChild('form') form!: NgForm

  constructor(private authService:AuthService,  private router:Router) { 
    localStorage.setItem("email",'admin@gmail.com')
    localStorage.setItem("password",'Password@1')
  }

  ngOnInit(): void {
  }
  options: AnimationOptions = {
    path: '/assets/lottie/login.json',
  };
  
  animationCreated(animationItem: AnimationItem): void {

  }

  onSubmit(){
    const token = localStorage.setItem("token", 'cvbnhssgh672772j$5')

    let email = localStorage.getItem("email")
    let password = localStorage.getItem("password")

    const user: loginuser = this.form.value

    if(user.email === email || user.password === password){

      console.log(user.email);
      this.router.navigate(['/admin'])
    }else{
      this.router.navigate(['/signup'])
    }
    
  }
  }


