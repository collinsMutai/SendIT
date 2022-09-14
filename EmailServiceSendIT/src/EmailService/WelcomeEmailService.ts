import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
interface IUser{
    id:number
    name:string
    email: string,
    welcome:string,
}


const WelcomeEmail= async()=>{
const pool = await mssql.connect(sqlConfig)
const users:IUser[]= await(await pool.request().query(`
SELECT * FROM CustomersTable WHERE welcome=0`)).recordset
console.log(users);



 for(let user of users){

    ejs.renderFile('templates/WelcomeEmail.ejs',{name:user.name} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:user.email,
            subject:"Welcome To SendIT, Thanks for Signing Up!",
            html:data,
            attachments:[
                {
                    filename:'user.text',
                    content:`Welcome email: ${user.name}`
                }
            ]
        }

        try {
            
            await sendMail(messageoption)
            await pool.request().query(`UPDATE CustomersTable SET welcome=1 WHERE id = '${user.id}'`)
            console.log('Welcome Email Sent');
            
        } catch (error) {
            console.log(error);
            
        }


    })

 }


}

export default WelcomeEmail


