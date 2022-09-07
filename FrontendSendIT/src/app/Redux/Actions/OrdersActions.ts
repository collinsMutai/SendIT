import { createAction, props } from "@ngrx/store";
import { IOrder } from "src/app/interfaces/interfaces";



export const LoadOrders = createAction('LoadOrder')
export const LoadOrdersSuccess = createAction('LoadOrderSuccess',
props<{orders:IOrder[]}>())
export const LoadOrdersFailure = createAction('LoadProduct',
props<{error:string}>())


export const DeleteOrder = createAction('DeleteOrder',
props<{id:number}>())
export const DeleteOrderSuccess = createAction('DeleteOrderSuccess',
props<{deletemessage:string}>())
export const DeleteOrderFailure=createAction('DeleteOrderFailure',
props<{error:string}>())