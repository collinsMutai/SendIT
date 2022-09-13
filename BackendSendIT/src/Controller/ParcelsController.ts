import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config/Config'
import Connection from '../DatabaseHelpers/db'
const db = new Connection()
import { ParcelSchema } from '../Helper/UserValidator'
import { Data } from '../Interfaces/interfaces'
import bcrypt from 'bcrypt'


interface Extended extends Request {
    info?: Data
}

interface ExtendedRequest extends Request {
  body: {
    id?:number,
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
}

export const addParcel = async (req: ExtendedRequest, res: Response) => {
    try {
      const id = uid()
      const { 
        senderEmail, senderName,receiverName,receiverEmail,origin,
        destination,dispatchedDate,deliveryDate,weight,price
      } = req.body
      const { error, value } = ParcelSchema.validate(req.body)
              if (error) {
                  return res.json({ error: error.details[0].message })
              }
     
      db.exec('insertParcel',{id, senderEmail,senderName,receiverName,
    receiverEmail,origin,destination,dispatchedDate,deliveryDate,weight,price})
      res.json({ message: 'Parcel created Successfully' })
    } catch (error) {
      res.json({ error })
    }
  }
  export const getParcels: RequestHandler = async (req, res) => {
    try {
      const {recordset} =await db.exec('getParcels')
      res.json(recordset)
    } catch (error) {
      res.json({ error })
    }
  }
  export const getParcel: RequestHandler<{ id: string }> = async (req, res) => {
    try {
      const id = req.params.id
      const {recordset} =await db.exec('getParcel',{id})
      if (!recordset[0]) {
        res.json({ message: 'Parcel Not Found' })
      } else {
        res.json(recordset)
      }
    } catch (error) {
      res.json({ error })
    }
  }
  export const deleteParcel:RequestHandler<{id:string}> =async(req,res)=>{
    try {
        const id = req.params.id
        const {recordset} =await db.exec('getParcel',{id})
        if(!recordset[0]){
         res.json({ message: 'Parcel Not Found' })
        }else{
          await db.exec('deleteParcel', {id})
        res.json({message:'Parcel Deleted'})
      }
    } catch (error:any) {
       res.json({ error }) 
    }
}
export const updateParcel: RequestHandler<{ id: string }> = async (
  req,
  res,
) => {
  try {
    const id= req.params.id
    const {   senderEmail, senderName,receiverName,receiverEmail,origin,
      destination,dispatchedDate,deliveryDate,weight,price } = req.body as {
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
       const {recordset} =await db.exec('getParcel',{id})
      if(!recordset[0]){
         res.json({ message: 'Parcel Not Found' })
      }else{
         await  db.exec('updateParcel',{id, senderEmail,senderName,receiverName,
          receiverEmail,origin,destination,dispatchedDate,deliveryDate,weight,price})
          res.json({message:'Parcel Updated ...'})
      }
 

  } catch (error:any) {
      res.json({ error })
  }
}










