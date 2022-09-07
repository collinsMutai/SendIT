

import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IOrder } from "src/app/interfaces/interfaces";
import * as Actions from "../Actions/OrdersActions"


export interface OrderState{
    orders:IOrder[]
    ordersError:string
    error:string
    deleteMessage:string
}

const initialState:OrderState={
    orders:[],
    ordersError:'',
    error:'',
    deleteMessage:''
}

const getProductFeatureState = createFeatureSelector<OrderState>('order')


export const getOrders= createSelector(
    getProductFeatureState,
    state=>state.orders
)


export const OrderReducer = createReducer(
    initialState,
    on(Actions.LoadOrdersSuccess, (state,action):OrderState=>{
        return{...state, orders:action.orders}
    }),on(Actions.LoadOrdersFailure, (state,action):OrderState=>{
        return{...state, ordersError:action.error}
    }),on(Actions.DeleteOrderSuccess, (state,action):OrderState=>{
        return{...state,deleteMessage:action.deletemessage}
    }),on(Actions.DeleteOrderFailure, (state,action):OrderState=>{
        return{...state,error:action.error}
    })
)