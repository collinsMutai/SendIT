import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer, IOrder } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = "http://localhost:3000"
  orders$!:Observable<IOrder[]>
  
  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Icustomer>{
    return this.http.get<Icustomer>(`${this.baseUrl}/customers`)
  }
  registerCustomer(customer:Icustomer[]): Observable<Icustomer>{
    return this.http.post<Icustomer>(`${this.baseUrl}/customers`, customer)
  }

  getOrders() : Observable <IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders`)
  }
  getOrderDetails(id:number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders/${id}`)
  }
  
  deleteOrder(id:number): Observable <{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/orders/${id}`)
  }
  createOrder(order:IOrder):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/orders`, order)
  }
  createCustomer(customer:Icustomer):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/customers`, customer)
  }
}
