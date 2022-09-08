import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getOrder, OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id!:number
  order$=this.store.select(getOrder)
  constructor(private route:ActivatedRoute, private store: Store<OrderState>) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id=+param['id']
    })
    this.store.dispatch(Actions.SelectedId({id:this.id}))
  }

}
