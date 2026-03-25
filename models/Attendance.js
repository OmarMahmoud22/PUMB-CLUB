const mongoose = require('mongoose')

const AttendanceSchema = mongoose.Schema({
    Class_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Classes',
        require:true
    },
    Trainer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Trainer',
        require:true
    },
    status:{
        type:String,
        enum:['Presence','absence'],
        default:'Presence'
    }
})

const Attendanc = mongoose.model('Attendanc' , AttendanceSchema)
module.exports = Attendanc
