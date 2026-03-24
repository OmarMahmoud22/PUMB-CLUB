const joi = require('joi')

const EnrolmentValidation = joi.object({
    Client_id: joi.string().hex().required(),
    Classes_id: joi.string().hex().required(),
    status : joi.string().valid('active','not active').required()
})

const EnrolmentValidationU = joi.object({
    Client_id: joi.string(),
    Classes_id: joi.string(),
    status : joi.string().valid('active','not active')
})

module.exports = {EnrolmentValidation,EnrolmentValidationU}