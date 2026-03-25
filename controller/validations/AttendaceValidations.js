const joi = require('joi')

const Attendance_Schema_Validations = joi.object({
    Class_id:joi.string().hex().required(),
    Trainer_id : joi.string().hex().required(),
    status: joi.string().valid('Presence','absence').required()
})

module.exports = {Attendance_Schema_Validations}