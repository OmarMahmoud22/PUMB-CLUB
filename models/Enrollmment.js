// const { required, boolean, bool, string } = require('joi')
const mongoose = require('mongoose')


const EnrollmentSchema = mongoose.Schema({
    Client_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client',
        required:true
    },
    Classes_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Classes',
        required:true
        
    },
    status:{
        type:String,
        enum:['active','not active'],
        default:"active"
    
    }
    
},{timestamp:true})

const Enrollment = mongoose.model('Enrollement' , EnrollmentSchema)
module.exports = Enrollment