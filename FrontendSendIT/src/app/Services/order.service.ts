import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer, IOrder, LoginDetails, LoginResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = "http://localhost:7002"
  
  orders$!:Observable<IOrder[]>
  
  constructor(private http: HttpClient, ) { }
  
  createOrder(order:IOrder):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/parcel/add`, order)
  }
  getOrders() : Observable <IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/all`)
  }
  getOrderDetails(id:string): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/view/${id}`)
  }
  
  deleteOrder(id:string): Observable <{message:string}>{
    return this.http.get<{message:string}>(`${this.baseUrl}/parcel/delete/${id}`)
  }
  deliverParcel(id:string):Observable<{message:string}>{
    return this.http.get<{message:string}>(`${this.baseUrl}/parcel/delivered/${id}`)
  }
  sentParcel(email:string):Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/user/sent/${email}`)
  }
  receivedParcel(email:string):Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/user/received/${email}`)
  }
  getOnTransit() : Observable <IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/ontransit`)
  }
  getDelivered() : Observable <IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/delivered`)
  }
  createCustomer(customer:Icustomer):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/user/signup`, customer)
  }
  getCustomers(): Observable<Icustomer[]>{
    return this.http.get<Icustomer[]>(`${this.baseUrl}/user/users`)
  }
  logUser(details:LoginDetails):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.baseUrl}/user/login`,details)
 }

}