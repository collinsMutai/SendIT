import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OrderState, getCustomers} from 'src/app/Redux/Reducer/OrderReducer';
import * as Actions from '../../Redux/Actions/OrdersActions'


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  form!:FormGroup
  senderName!:string
  receiverName!:string
  senderEmail!:string
  receiverEmail!:string
  origin!:string
  destination!:string
  dispatchedDate!:string
  deliveryDate!:string
  weight!:number
  price!:number
  customers$ = this.store.select(getCustomers)
  constructor(private router:Router, private store:Store<OrderState>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      senderName: new FormControl(null, [Validators.required]),
      receiverName: new FormControl(null, [Validators.required]),
      senderEmail: new FormControl('select', [Validators.required]),
      receiverEmail: new FormControl('select', [Validators.required]),
      origin: new FormControl(null, [Validators.required]),
      destination: new FormControl(null, [Validators.required]),
      dispatchedDate: new FormControl(null, [Validators.required]),
      deliveryDate: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
    });
    this.getCustomerEmail()
  }
onSubmit(){
  this.store.dispatch(Actions.AddOrder({newOrder: this.form.value}))
  this.store.dispatch(Actions.LoadOrders())
  this.router.navigate(['/admin'])
}
getCustomerEmail(){
  this.store.dispatch(Actions.LoadCustomers())
}
}
