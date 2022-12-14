import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { OrderService } from 'src/app/Services/order.service';
import * as OrdersActions from '../Actions/OrdersActions';
const email = localStorage.getItem('email') as string

@Injectable({
  providedIn: 'root',
})
export class OrderEffectsService {
  constructor(private actions: Actions, private orderService: OrderService, private store: Store) {}

  loadOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.LoadOrders),
      concatMap(() =>
        this.orderService.getOrders().pipe(
          map((orders) => OrdersActions.LoadOrdersSuccess({ orders })),
          catchError((error) =>
            of(OrdersActions.LoadOrdersFailure({ error: error.message }))
          )
        )
      )
    );
  });
  loadSentOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.LoadSentOrders),
      concatMap((action) =>
        this.orderService.sentParcel(action.email).pipe(
          map((sentOrders) => OrdersActions.LoadSentOrdersSuccess({ sentOrders })),
          catchError((error) =>
            of(OrdersActions.LoadSentOrdersFailure({ error: error.message }))
          )
        )
      )
    );
  });

  deleteOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.DeleteOrder),
      mergeMap((action) =>
        this.orderService.deleteOrder(action.id).pipe(
          tap(res => {
            this.store.dispatch(OrdersActions.LoadOrders());
          }),
          map((res) =>
            OrdersActions.DeleteOrderSuccess({ deletemessage: res.message })
          ),
          catchError((error) =>
            of(OrdersActions.DeleteOrderFailure({ error: error.message }))
          )
        )
      )
    );
  });
  deliveredOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.DeliverOrder),
      mergeMap((action) =>
        this.orderService.deliverParcel(action.id).pipe(
          tap(res => {
            this.store.dispatch(OrdersActions.LoadOrders());
          }),
          map((res) =>
            OrdersActions.DeliverOrderSuccess({ deliverMessage: res.message })
          ),
          catchError((error) =>
            of(OrdersActions.DeliverOrderFailure({ error: error.message }))
          )
        )
      )
    );
  });

  addProduct = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.AddOrder),
      mergeMap((action) =>
        this.orderService.createOrder(action.newOrder).pipe(
          map((res) =>
            OrdersActions.AddOrderSuccess({ addMessage: res.message })
          ),
          catchError((error) =>
            of(OrdersActions.AddOrderFailure({ error: error }))
          )
        )
      )
    );
  });
  addCustomer = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.RegisterCustomer),
      mergeMap((action) =>
        this.orderService.createCustomer(action.newCustomer).pipe(
          map((res) =>
            OrdersActions.RegisterCustomerSuccess({ addMessage: res.message })
          ),
          catchError((error) =>
            of(OrdersActions.RegisterCustomerFailure({ error: error.message }))
          )
        )
      )
    );
  });
  loadCustomer = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.LoadCustomers),
      concatMap(() =>
        this.orderService.getCustomers().pipe(
          map((customers) => OrdersActions.LoadCustomersSuccess({ customers })),
          catchError((error) =>
            of(OrdersActions.LoadCustomersFailure({ error: error.message }))
          )
        )
      )
    );
  });
 
}
