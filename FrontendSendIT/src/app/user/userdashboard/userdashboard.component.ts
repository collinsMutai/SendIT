import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import { OrderService } from 'src/app/Services/order.service';
import * as Actions from '../../Redux/Actions/OrdersActions';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  today = Date.now();

  allsent: IOrder[] = [];
  allreceived: IOrder[] = [];
  errorMessage: string = '';
  display = false;
  origin!: string;
  senderEmail!: string;
  receiverEmail!: string;
  customer = localStorage.getItem('name');

  constructor(
    private store: Store<OrderState>,
    private router: Router,
    private route: ActivatedRoute,
    private OrderService: OrderService
  ) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email') ?? '';
    this.loadSent(email);
    this.loadReceived(email)
  }
  loadSent(email: string) {
    this.OrderService.sentParcel(email).subscribe((res) => {
      this.allsent = res;
      console.log(this.allsent);
    });
  }
  loadReceived(email: string) {
    this.OrderService.receivedParcel(email).subscribe((res) => {
      this.allreceived = res;
      console.log(this.allsent);
    });
  }
  // orderDetails(senderEmail: string, origin: string, receiverEmail: string) {
  //   this.display = true;
  //   this.origin = origin;
  //   this.senderEmail = senderEmail;
  // }
  close() {
    this.display = false;
  }
}
