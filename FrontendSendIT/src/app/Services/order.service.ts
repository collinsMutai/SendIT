import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer, IOrder } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = "http://localhost:3000"
  
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
  getOrder(id:number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders/${id}`)
  }
  deleteOrder(id:number){
    return this.http.delete(`${this.baseUrl}/orders/${id}`)
  }
  createOrder(order:IOrder){
    return this.http.post(`${this.baseUrl}/orders`, order)
  }
}
