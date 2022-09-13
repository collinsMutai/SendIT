
import { Request, RequestHandler, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config/Config'
import Connection from '../DatabaseHelpers/db'
const db = new Connection()
import { UserSchema, UserSchema2 } from '../Helper/UserValidator'
import { Data } from '../Interfaces/interfaces'
import bcrypt from 'bcrypt'


interface Extended extends Request {
    info?: Data
}

interface ExtendedRequest extends Request {
  body: {
    name: string
    email: string
    password: string
  }
}
export const registerUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid()
    const { name, email, password} = req.body
    const { error, value } = UserSchema.validate(req.body)
            if (error) {
                return res.json({ error: error.details[0].message })
            }
    const hashedpassword = await bcrypt.hash(password, 10)
    db.exec('insertCustomer',{id,name, email, password:hashedpassword})
    res.json({ message: 'Customer Registered Successfully' })
  } catch (error) {
    res.json({ error })
  }
}
export const getUsers: RequestHandler = async (req, res) => {
  try {
    const {recordset} =await db.exec('getUsers')
    res.json(recordset)
  } catch (error) {
    res.json({ error })
  }
}



