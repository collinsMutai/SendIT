import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer, Iloginuser, IOrder, LoginDetails, LoginResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = "http://localhost:7003"
  
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
    return this.http.get<{message:string}>(`${this.baseUrl}/parcel//delivered/${id}`)
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
 checkuser():Observable<{ name: string, role: string, email: string }>{
  const token = localStorage.getItem('token') as string
  return this.http.get<{ name: string, role: string, email: string }>(`${this.baseUrl}/user/check`,{
    headers:new HttpHeaders({token})
  }
  )
}

}