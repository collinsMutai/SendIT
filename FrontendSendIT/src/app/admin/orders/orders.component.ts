import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/Services/order.service';
import { Store } from '@ngrx/store';
import { getOrders, OrderState } from '../../Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders$ = this.store.select(getOrders)
  errorMessage: string = '';
  filter = '';
  constructor(private orderService: OrderService, private store: Store<OrderState>) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadCustomers();
  }
  loadCustomers() {
    this.orderService.getCustomers().subscribe((result) => {});
  }
  loadOrders() {
    this.store.dispatch(Actions.LoadOrders())
  }
  deleteOrder(id: number = 0) {
   this.store.dispatch(Actions.DeleteOrder({id}))
   this.store.dispatch(Actions.LoadOrders())
  }
  orderDetails(id: number = 0) {
    console.log(id);
  }
}
