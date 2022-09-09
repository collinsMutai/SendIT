import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/Services/order.service';
import { Store } from '@ngrx/store';
import { getOrders, OrderState } from '../../Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders$ = this.store.select(getOrders);
  errorMessage: string = '';
  filteredText = '';
  constructor(
    private orderService: OrderService,
    private store: Store<OrderState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadCustomers();
  }
  loadCustomers() {
    this.orderService.getCustomers().subscribe((result) => {
      console.log(result);
    });
  }
  loadOrders() {
    this.store.dispatch(Actions.LoadOrders());
  }
  deleteOrder(id: number = 0) {
    this.store.dispatch(Actions.DeleteOrder({ id }));
    this.store.dispatch(Actions.LoadOrders());
    console.log(id);
  }
  orderDetails(id: number = 0) {
    this.store.dispatch(Actions.SelectedId({ id }));
    console.log(id);

    this.router.navigate([`/admin/order-details/${id}`], {
      relativeTo: this.route,
    });
  }
  orderDelivered(id: number = 0) {}
}
