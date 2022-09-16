import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getOrders, OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions';

@Component({
  selector: 'app-orders-sent',
  templateUrl: './orders-sent.component.html',
  styleUrls: ['./orders-sent.component.css']
})
export class OrdersSentComponent implements OnInit {
 

  constructor(private store: Store<OrderState>) { }

  ngOnInit(): void {
    
  }

}
