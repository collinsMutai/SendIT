import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { loginuser } from '../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email!: string
password!:string

@ViewChild('form') form!: NgForm

  constructor() { }

  ngOnInit(): void {
  }
  options: AnimationOptions = {
    path: '/assets/lottie/login.json',
  };
  
  animationCreated(animationItem: AnimationItem): void {

  }

  onSubmit(){
    const user: loginuser = this.form.value
    
  }

}
