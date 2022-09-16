import express, { json } from 'express'
import cors from 'cors'
import routeru from './Routes/Userroutes'
import routerp from './Routes/ParcelRoutes'

const app= express()

app.use(json())
app.use(cors())
app.use('/user', routeru)
app.use('/parcel', routerp)


app.listen(7002,()=>{
    console.log("Application Running");
    
})