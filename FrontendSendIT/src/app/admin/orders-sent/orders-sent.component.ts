import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders-sent',
  templateUrl: './orders-sent.component.html',
  styleUrls: ['./orders-sent.component.css']
})
export class OrdersSentComponent implements OnInit {
 orders!: IOrder[]
 filteredText = '';
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadTransit()
  }
  loadTransit(){
    this.orderService.getOnTransit().subscribe((res)=>{
      console.log(res);
      this.orders = res
      
    })
  }

}
