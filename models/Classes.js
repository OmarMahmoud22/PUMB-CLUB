const { required } = require('joi')
const mongoose = require('mongoose')

const ClassesSchema = mongoose.Schema({
    trainerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Trainer',
        required:true
    },
    name:{
        type:String,
        enum:['Fitness','Boxing','Calistinics','Yoga','Zompa','Body Shape'],
        required:true,
    },
    price:{
        type:Number,    
        required:true,
    },
    start_in:{
        type:String,
        required:true,
    },
    end_in:{
        type:String,
        required:true,
    }


})

const Classes = mongoose.model('Classes',ClassesSchema)
module.exports = Classes