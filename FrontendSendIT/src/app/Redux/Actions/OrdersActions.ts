import { createAction, props } from "@ngrx/store";
import { Icustomer, IOrder } from "src/app/interfaces/interfaces";

export const SelectedId= createAction('SelectedId', props<{id:string}>())


export const LoadOrders = createAction('LoadOrders')
export const LoadOrdersSuccess = createAction('LoadOrderSuccess',
props<{orders:IOrder[]}>())
export const LoadOrdersFailure = createAction('LoadOrdersFailure',
props<{error:string}>())


export const DeleteOrder = createAction('DeleteOrder',
props<{id:string}>())
export const DeleteOrderSuccess = createAction('DeleteOrderSuccess',
props<{deletemessage:string}>())
export const DeleteOrderFailure=createAction('DeleteOrderFailure',
props<{error:string}>())

export const DeliverOrder = createAction('DeliverOrder',
props<{id:string}>())
export const DeliverOrderSuccess = createAction('DeliverOrderSuccess',
props<{deliverMessage:string}>())
export const DeliverOrderFailure=createAction('DeliverOrderFailure',
props<{error:string}>())


export const AddOrder= createAction('AddOrder',
props<{newOrder:IOrder}>()
)
export const AddOrderSuccess= createAction('AddOrderSuccess',
props<{addMessage:string}>()
)
export const AddOrderFailure= createAction('AddOrderFailure',
props<{error:string}>()
)
export const RegisterCustomer= createAction('RegisterCustomer',
props<{newCustomer:Icustomer}>()
)
export const RegisterCustomerSuccess= createAction('RegisterCustomerSuccess',
props<{addMessage:string}>()
)
export const RegisterCustomerFailure= createAction('RegisterCustomerFailure',
props<{error:string}>()
)

export const LoadCustomers = createAction('LoadCustomers')
export const LoadCustomersSuccess = createAction('LoadCustomersSuccess',
props<{customers:Icustomer[]}>())
export const LoadCustomersFailure = createAction('LoadCustomersFailure',
props<{error:string}>())

