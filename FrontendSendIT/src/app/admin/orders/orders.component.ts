import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCustomers, getOrders, OrderState } from '../../Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders$ = this.store.select(getOrders);
  customers$ = this.store.select(getCustomers)
  errorMessage: string = '';
  filteredText = '';
  clicked = false
  constructor(
    private store: Store<OrderState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadCustomers();
  }
  loadCustomers() {
    this.store.dispatch(Actions.LoadCustomers())
  }
  loadOrders() {
    this.store.dispatch(Actions.LoadOrders());
  }
  deleteOrder(id: number = 0) {
    this.store.dispatch(Actions.DeleteOrder({ id }));
    this.store.dispatch(Actions.LoadOrders());
  }
  orderDetails(id: number = 0) {
    this.store.dispatch(Actions.SelectedId({ id }));
    this.router.navigate([`/admin/order-details/${id}`], {
      relativeTo: this.route,
    });
  }
  orderDelivered(id: number = 0) {
    console.log(id);
    this.clicked  = true
  }
}
