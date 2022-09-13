
import Joi from 'joi'

export const UserSchema= Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8),
    name:Joi.string().required()
})

export const ParcelSchema= Joi.object({
    senderName:Joi.string().required(),
    receiverName:Joi.string().required(),
    senderEmail:Joi.string().required(),
    receiverEmail:Joi.string().required(),
    origin:Joi.string().required(),
    destination:Joi.string().required(),
    dispatchedDate:Joi.string().required(),
    deliveryDate:Joi.string().required(),
    weight:Joi.number().required(),
    price:Joi.number().required()
})


