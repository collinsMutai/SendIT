import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Store } from '@ngrx/store';
import { getOrders, OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  today = Date.now();
  orders$ = this.store.select(getOrders);
  errorMessage: string = '';
  display = false;
  origin!: string;
  senderEmail!: string;
  receiverEmail!: string;

  constructor(
    private store: Store<OrderState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }
  loadOrders() {
    this.store.dispatch(Actions.LoadOrders());
    console.log(this.orders$);
  }
  orderDetails(senderEmail: string, origin: string, receiverEmail: string) {
    this.display = true;
    this.origin = origin;
    this.senderEmail = senderEmail;
  }
  close() {
    this.display = false;
  }
}
