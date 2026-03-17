const joi = require('joi')

const ClassesSchema = joi.object({
    trainerId: joi.string().required(),
    name: joi.string().required().valid('Fitness','Boxing','Calistinics','Yoga','Zompa','Body Shape'),
    price : joi.number().required(),
    start_in:joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
    end_in:joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    

})
module.exports = {ClassesSchema}