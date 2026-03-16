const Joi = require('joi')

const TrainSchema = Joi.object({

userId : Joi.string().required(),
name: Joi.string().required(),
experience_years: Joi.number().required(),
rating: Joi.number().max(10),
salary:Joi.number().required()


})


module.exports ={TrainSchema}