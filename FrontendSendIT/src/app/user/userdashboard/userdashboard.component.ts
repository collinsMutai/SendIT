import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
const divmap = document.getElementById('map') as HTMLDivElement;

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  today = Date.now();

  constructor() {}

  ngOnInit(): void {}
  
}
