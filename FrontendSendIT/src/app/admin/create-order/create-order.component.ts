import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  weight!:string
  price=0
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      senderName: new FormControl(null, [Validators.required]),
      receiverName: new FormControl(null, [Validators.required]),
      SenderEmail: new FormControl(null, [Validators.required, Validators.email]),
      ReceiverEmail: new FormControl(null, [Validators.required, Validators.email]),
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
  
}
}
