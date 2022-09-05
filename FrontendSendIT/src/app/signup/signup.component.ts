import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
