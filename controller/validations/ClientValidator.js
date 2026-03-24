const joi = require('joi')
const { clientEncryption } = require('../../models/User')

const ClientValidation = joi.object({
    userId : joi.string().required(),
    name : joi.string().required(),
    age: joi.number().required().min(16),
    weight:joi.number(),
    height:joi.number()

})

module.exports = {ClientValidation}