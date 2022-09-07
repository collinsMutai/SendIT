import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders$: Observable<IOrder[]> = new Observable();
  errorMessage: string = '';
  filter = '';
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadCustomers();
  }
  loadCustomers() {
    this.orderService.getCustomers().subscribe((result) => {});
  }
  loadOrders() {
    this.orders$ = this.orderService.getOrders().pipe(
      catchError((error) => {
        console.log(error);
        this.errorMessage = error.message;
        return of([]);
      })
    );
  }
  deleteOrder(id: number = 0) {
    this.orderService.deleteOrder(id).subscribe((result) => {
      this.loadOrders();
    });
  }
  orderDetails(id: number = 0) {
    console.log(id);
  }
}
