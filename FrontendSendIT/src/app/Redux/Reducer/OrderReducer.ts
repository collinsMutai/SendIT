import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Icustomer, IOrder } from 'src/app/interfaces/interfaces';
import * as Actions from '../Actions/OrdersActions';

export interface OrderState {
  orders: IOrder[];
  sentOrders: IOrder[];
  ordersError: string;
  error: string;
  deleteMessage: string;
  orderid: string;
  sentorders: IOrder[],
  addMessage: string;
  deliverMessage: string,
  customers: Icustomer[];
  customerid: string,
  customersError: string;
  email: string
}

const initialState: OrderState = {
  orders: [],
  sentOrders: [],
  ordersError: '',
  error: '',
  deleteMessage: '',
  orderid: '',
  sentorders: [],
  addMessage: '',
  customers: [],
  customerid: '',
  customersError: '',
  deliverMessage: '',
  email: ''
};

const getProductFeatureState = createFeatureSelector<OrderState>('order');

export const getOrders = createSelector(
  getProductFeatureState,
  (state) => state.orders
);
export const getSentOrders = createSelector(
  getProductFeatureState,
  (state) => state.sentOrders
);


export const getOrderid = createSelector(
  getProductFeatureState,
  (state) => state.orderid
);
export const getOrder = createSelector(
  getProductFeatureState,
  getOrderid,
  (state, id) => state.orders.find((order) => order.id === id)
);


export const getCustomers = createSelector(
  getProductFeatureState,
  (state) => state.customers
);
export const getCustomerid = createSelector(
  getProductFeatureState,
  (state) => state.customerid
);
export const getCustomer = createSelector(
  getProductFeatureState,
  getCustomerid,
  (state, id) => state.customers.find((customer) => customer.id === id)
);


export const OrderReducer = createReducer(



  initialState,
  on(Actions.LoadOrdersSuccess, (state, action): OrderState => {
    return { ...state, orders: action.orders };
  }),
  on(Actions.LoadOrdersFailure, (state, action): OrderState => {
    return { ...state, ordersError: action.error };
  }),

  on(Actions.LoadSentOrdersSuccess, (state, action): OrderState => {
    return { ...state, sentOrders: action.sentOrders };
  }),
  on(Actions.LoadSentOrdersFailure, (state, action): OrderState => {
    return { ...state, ordersError: action.error };
  }),




  on(Actions.DeleteOrderSuccess, (state, action): OrderState => {
    return { ...state, deleteMessage: action.deletemessage };
  }),
  on(Actions.DeleteOrderFailure, (state, action): OrderState => {
    return { ...state, error: action.error };
  }),
  on(Actions.DeliverOrderSuccess, (state, action): OrderState => {
    return { ...state, deliverMessage: action.deliverMessage };
  }),
  on(Actions.DeliverOrderFailure, (state, action): OrderState => {
    return { ...state, error: action.error };
  }),

  on(Actions.SelectedId, (state, action): OrderState => {
    return { ...state, orderid: action.id };
  }),


  on(Actions.AddOrderSuccess, (state, action): OrderState => {
    return { ...state, addMessage: action.addMessage }
  }), on(Actions.AddOrderFailure, (state, action): OrderState => {
    return { ...state, error: action.error }

  })
  , on(Actions.RegisterCustomerSuccess, (state, action): OrderState => {
    return { ...state, addMessage: action.addMessage }
  }), on(Actions.RegisterCustomerFailure, (state, action): OrderState => {
    return { ...state, error: action.error }

  }),
  on(Actions.LoadCustomersSuccess, (state, action): OrderState => {
    return { ...state, customers: action.customers };
  }),
  on(Actions.LoadCustomersFailure, (state, action): OrderState => {
    return { ...state, customersError: action.error };
  })
);