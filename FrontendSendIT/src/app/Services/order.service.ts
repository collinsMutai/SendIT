import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Icustomer,
  IOrder,
  LoginDetails,
  LoginResponse,
} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl: string = 'http://localhost:7003';
  token = localStorage.getItem('token') as string;
  orders$!: Observable<IOrder[]>;

  constructor(private http: HttpClient) {}

  createOrder(order: IOrder): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.baseUrl}/parcel/add`,
      order,
      {
        headers: new HttpHeaders({ token: this.token }),
      }
    );
  }
  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/all`, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }
  getOrderDetails(id: string): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/view/${id}`, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }

  deleteOrder(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/parcel/delete/${id}`,
      {
        headers: new HttpHeaders({ token: this.token }),
      }
    );
  }
  deliverParcel(id: string): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(
      `${this.baseUrl}/parcel/delivered/${id}`,
      {
        headers: new HttpHeaders({ token: this.token }),
      }
    );
  }
  sentParcel(email: string): Observable<IOrder[]> {
    const token = localStorage.getItem('token') as string;

    return this.http.get<IOrder[]>(`${this.baseUrl}/user/sent/${email}`, {
      headers: new HttpHeaders({ token }),
    });
  }
  receivedParcel(email: string): Observable<IOrder[]> {
    const token = localStorage.getItem('token') as string;

    return this.http.get<IOrder[]>(`${this.baseUrl}/user/received/${email}`, {
      headers: new HttpHeaders({ token }),
    });
  }
  getOnTransit(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/ontransit`, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }
  getDelivered(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/parcel/delivered`, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }
  createCustomer(customer: Icustomer): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.baseUrl}/user/signup`,
      customer
    );
  }
  getCustomers(): Observable<Icustomer[]> {
    return this.http.get<Icustomer[]>(`${this.baseUrl}/user/users`);
  }
  logUser(details: LoginResponse): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/user/login`, details);
  }
}
// , {
//   headers:new HttpHeaders({token})
// }
