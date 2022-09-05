import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options: AnimationOptions = {
    path: '/assets/lottie/login.json',
  };
  
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
