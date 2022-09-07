import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/Services/order.service';

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
  constructor(private orderService:OrderService, private router:Router) { }

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
  this.orderService.createOrder(this.form.value).subscribe(result =>{
    this.router.navigate(['/admin/orders'])
  })
}
}
