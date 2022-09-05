import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CommonModule } from '@angular/common';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrdersSentComponent } from './orders-sent/orders-sent.component';
import { OrdersDeliveredComponent } from './orders-delivered/orders-delivered.component';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    OrdersComponent,
    OrderDetailsComponent,
    CreateOrderComponent,
    OrdersSentComponent,
    OrdersDeliveredComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    [LottieModule.forRoot({ player: playerFactory })],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
