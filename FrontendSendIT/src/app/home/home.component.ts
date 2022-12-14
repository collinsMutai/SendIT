import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void { }
  
  options: AnimationOptions = {
    path: '/assets/lottie/deliverymotorbike.json',
  };
  
  animationCreated(animationItem: AnimationItem): void {
  }
  

}
