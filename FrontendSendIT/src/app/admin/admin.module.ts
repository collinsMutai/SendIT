import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrdersSentComponent } from './orders-sent/orders-sent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OrdersDeliveredComponent } from './orders-delivered/orders-delivered.component';
import { SearchPipe } from '../Pipes/search.pipe';
import { SharedModule } from '../Shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StyleDirective } from '../Directive/style.directive';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffectsService } from '../Redux/Effects/OrderEffects';
import { OrderReducer } from '../Redux/Reducer/OrderReducer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrdersComponent,
    CreateOrderComponent,
    OrdersDeliveredComponent,
    OrdersSentComponent,
    AdmindashboardComponent,
    SearchPipe,
    StyleDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    HttpClientModule,
    StoreModule.forFeature('order', OrderReducer),
    EffectsModule.forFeature([OrderEffectsService]),
    GooglePlaceModule
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule {}
