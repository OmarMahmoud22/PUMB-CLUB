const { required, string } = require('joi')
const mongoose = require('mongoose')

const TranerSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
        
    },
    name :{
        type:String,
        required:true
    },
    experience_years:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        max:10
    },
    salary:{
        type:Number,
        required:true,
    }
})

const Trainer = mongoose.model('Trainer' , TranerSchema)
module.exports = Trainer