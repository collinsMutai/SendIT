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
import { SharedModule } from '../Shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { OrderReducer } from '../Redux/Reducer/OrderReducer';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffectsService } from '../Redux/Effects/OrderEffects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



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
    SharedModule,
    NgxPaginationModule,
    StoreModule.forFeature('order',OrderReducer),
    EffectsModule.forFeature([OrderEffectsService]),
  ]
})
export class AdminModule { }
