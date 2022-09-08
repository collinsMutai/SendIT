import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { OrderService } from 'src/app/Services/order.service';
import * as OrdersActions from '../Actions/OrdersActions'

@Injectable({
  providedIn: 'root'
})
export class OrderEffectsService {

  constructor(private actions:Actions, private orderService:OrderService) { }

  loadOrder= createEffect(()=>{
    return this.actions.pipe(
      ofType(OrdersActions.LoadOrders),
      concatMap(()=> this.orderService.getOrders().pipe(
        map(orders=>OrdersActions.LoadOrdersSuccess({orders})),
        catchError(error=>of(OrdersActions.LoadOrdersFailure({error:error.message})))
      ))
    )
  })

  deleteOrder= createEffect(()=>{
    return this.actions.pipe(
      ofType(OrdersActions.DeleteOrder),
      mergeMap(action=> this.orderService.deleteOrder(action.id).pipe(
        map(res=>OrdersActions.DeleteOrderSuccess({deletemessage:res.message})),
        catchError(error=>of(OrdersActions.DeleteOrderFailure({error:error.message})))
      ))

    )
  })

  addProduct=createEffect(()=>{
    return this.actions.pipe(
        ofType(OrdersActions.AddOrder),
        mergeMap(action=>this.orderService.createOrder(action.newOrder).pipe(
            map(res=>OrdersActions.AddOrderSuccess({addMessage:res.message})),
            catchError(error=>of(OrdersActions.AddOrderFailure({error:error})))
        ))
    )
})
}
