import express from 'express'
import cron from 'node-cron'
import WelcomeEmail from './EmailService/WelcomeEmailService'
import OnTransitEmail from './EmailService/OnTransitEmailService'
import DeliveredEmail from './EmailService/DeliveredEmail'
const app = express()

const run =()=>{
    cron.schedule('*/10 * * * * *', async()=>{
        console.log('cron is running');
        await WelcomeEmail()
        await OnTransitEmail()
        await DeliveredEmail()
        
    })
}
run()

app.listen(3000, ()=>{
    console.log('Email service is running');
    
})