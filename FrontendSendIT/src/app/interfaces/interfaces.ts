export interface LoginResponse {
  message: string;
  email: string;
  role: string;
  name: string;
  token: string;
  error: boolean;
  password: string;
}
export interface LoginDetails {
  email: string;
  password: string;
}

export interface Icustomer {
  id: string;
  name: string;
  email: string;
  password: string;
}
export interface IOrder {
  id: string;
  senderName: string;
  receiverName: string;
  senderEmail: string;
  receiverEmail: string;
  origin: string;
  destination: string;
  dispatchedDate: string;
  deliveryDate: string;
  weight: number;
  price: number;
  receiverLat: number
  receiverLng: number
  senderLat: number
  senderLng: number
  
}
