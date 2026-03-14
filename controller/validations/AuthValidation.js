const Joi = require('joi')


const regesterSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("user", "admin" , "trainer").required()
})
const LoginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),

})


module.exports= {
    LoginSchema,
    regesterSchema
}