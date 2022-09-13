export interface Iloginuser{
    email:string,
    password:string
    error?: string
    message?:string
    token?:string
    role?:string
    name?:string
}
export interface Icustomer{
    id:string,
    name:string
    email:string
    password:string
}
export interface IOrder{
    id:string,
    senderName:string
    receiverName:string
    senderEmail:string
    receiverEmail:string
    origin:string
    destination:string
    dispatchedDate:string
    deliveryDate:string
    weight:number
    price:number
}
