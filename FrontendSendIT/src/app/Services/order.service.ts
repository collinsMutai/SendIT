import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer, IOrder } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = "http://localhost:7003"
  // testUrl: string = "http://localhost:3000"
  // http://localhost:4200/admin/order-details/6
  orders$!:Observable<IOrder[]>
  
  constructor(private http: HttpClient) { }
  
  createOrder(order:IOrder):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/parcel/addparcel`, order)
  }
  getOrders() : Observable <IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/parcels`)



  }
  getOrderDetails(id:string): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/parcels/${id}`)
  }
  
  deleteOrder(id:string): Observable <{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/parcel/parcels/${id}`)
  }

  createCustomer(customer:Icustomer):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/user/signup`, customer)
  }
  getCustomers(): Observable<Icustomer[]>{
    return this.http.get<Icustomer[]>(`${this.baseUrl}/user/users`)
  }

}