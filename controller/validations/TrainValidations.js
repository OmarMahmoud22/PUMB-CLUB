const Joi = require('joi')
const Trainer = require("../../models/Trainer")

const TrainSchema = Joi.object({

userId : Joi.string().required(),
name: Joi.string().required(),
experience_years: Joi.number().required(),
rating: Joi.number().max(10),
salary:Joi.number().required()


})
const TrainUSchema = Joi.object({

userId : Joi.string(),
name: Joi.string(),
experience_years: Joi.number(),
rating: Joi.number(),
salary:Joi.number()


})


module.exports ={TrainSchema}