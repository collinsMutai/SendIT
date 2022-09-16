import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import Connection from "../DatabaseHelpers/db";
const db = new Connection();
import sendMail from '../Helpers/Email'
interface IParcel{
    id:string,
    senderName:string
    receiverName:string
    senderEmail:string
    receiverEmail:string
    origin:string
    destination:string
    dispatchedDate:string
    deliveryDate:string
    weight:string
    price:string
}


const DeliveredEmail= async()=>{
const pool = await mssql.connect(sqlConfig)
const parcels:IParcel[]= await (await db.exec("deliveredEmail")).recordset
console.log(parcels);



 for(let parcel of parcels){

    ejs.renderFile('templates/DeliveredEmail.ejs',{senderName:parcel.senderName,receiverName:parcel.receiverName,parcelOrigin:parcel.origin, deliveryDate:parcel.deliveryDate,parcelDestination:parcel.destination} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:parcel.receiverEmail,
            subject:"Your Parcel Has Been Delivered",
            html:data,
            attachments:[
                {
                    filename:'task.txt',
                    content:`Order summary for a package from : ${parcel.senderName}`
                }
            ]
        }

        try {
            
            await sendMail(messageoption)
            await db.exec("resetdeliveredEmail", { id: parcel.id });
            // await  pool.request().query(`UPDATE ParcelsTable SET delivered=0 WHERE delivered=1`)
            console.log('Delivered Email is Sent');
            
        } catch (error) {
            console.log(error);
            
        }


    })

 }


}

export default DeliveredEmail