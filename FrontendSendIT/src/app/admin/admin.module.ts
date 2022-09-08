import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
// import { OrdersDeliveredComponent } from '../orders-delivered/orders-delivered.component';
import { OrdersSentComponent } from './orders-sent/orders-sent.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OrdersDeliveredComponent } from './orders-delivered/orders-delivered.component';
import { SearchPipe } from '../Pipes/search.pipe';



@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrdersComponent,
    CreateOrderComponent,
    OrdersDeliveredComponent,
    OrdersSentComponent,
    AdmindashboardComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class AdminModule { }
