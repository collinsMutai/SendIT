import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.css']
})
export class OrdersDeliveredComponent implements OnInit {

  orders!: IOrder[]
 filteredText = '';
  constructor( private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadDelivered()
  }
  loadDelivered(){
    this.orderService.getDelivered().subscribe((res)=>{
      console.log(res);
      this.orders = res
      
    })
  }

}
