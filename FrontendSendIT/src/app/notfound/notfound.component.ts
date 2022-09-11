import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options: AnimationOptions = {
    path: '/assets/lottie/lf30_editor_9kzn22bx.json',
  };
  
  animationCreated(animationItem: AnimationItem): void {
  }
  

}
