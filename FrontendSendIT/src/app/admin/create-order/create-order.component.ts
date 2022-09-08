import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import { OrderService } from 'src/app/Services/order.service';
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
  constructor(private orderService:OrderService, private router:Router, private store:Store<OrderState>) { }

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
  }
onSubmit(){
  console.log(this.form.value);
  
  this.store.dispatch(Actions.AddOrder({newOrder: this.form.value}))
  this.store.dispatch(Actions.LoadOrders())
  this.router.navigate(['/admin'])
 
}
}
