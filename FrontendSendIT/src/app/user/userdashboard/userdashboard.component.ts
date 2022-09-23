import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IOrder } from 'src/app/interfaces/interfaces';
import { getSentOrders, OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import { OrderService } from 'src/app/Services/order.service';
import * as Actions from '../../Redux/Actions/OrdersActions';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  today = Date.now();

  // allsent: IOrder[] = [];
  sentOrders$ = this.store.select(getSentOrders);
  receivedOrders$ = this.store.select(getSentOrders);
  // allreceived: IOrder[] = [];
  errorMessage: string = '';
  display = false;
  origin!: string;
  destination!: string;
  senderName!: string;
  receiverName!: string;
  customer = localStorage.getItem('name');
  p: number = 1;
  p1: number = 1;

  constructor(
    private store: Store<OrderState>,
    private router: Router,
    private route: ActivatedRoute,
    private OrderService: OrderService
  ) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email') ?? '';
    this.store.select(getSentOrders).subscribe((res) => {
      console.log(res);
    });

    this.loadSent(email);
    this.loadReceived(email);
  }
  loadSent(email: string) {
    this.store.dispatch(Actions.LoadSentOrders({ email: email }));
    // this.OrderService.sentParcel(email).subscribe((res) => {
    //   this.allsent = res;
    // });
  }
  loadReceived(email: string) {
    this.store.dispatch(Actions.LoadSentOrders({ email: email }));
    // this.OrderService.receivedParcel(email).subscribe((res) => {
    //   this.allreceived = res;
    //   console.log(this.allreceived);
    // });
  }
  orderDetails(
    origin: string,
    destination: string,
    senderName: string,
    receiverName: string
  ) {
    this.display = true;
    this.origin = origin;
    this.destination = destination;
    this.senderName = senderName;
    this.receiverName = receiverName;
  }
  close() {
    this.display = false;
  }
}
