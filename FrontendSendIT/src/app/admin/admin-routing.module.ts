import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersSentComponent } from './orders-sent/orders-sent.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OrdersDeliveredComponent } from './orders-delivered/orders-delivered.component';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';

const appRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuardGuard],
    canLoad: [AuthGuardGuard],
    component: AdmindashboardComponent,
    children: [
      { path: '', component: OrdersComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'order-details/:id', component: OrderDetailsComponent },
      { path: 'create', component: CreateOrderComponent },
      { path: 'details', component: OrderDetailsComponent },
      { path: 'sent', component: OrdersSentComponent },
      { path: 'delivered', component: OrdersDeliveredComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
