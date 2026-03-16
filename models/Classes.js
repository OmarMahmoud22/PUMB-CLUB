const { required } = require('joi')
const mongoose = require('mongoose')

const ClassesSchema = mongoose.Schema({
    trainerId:{
        type:mongoose.Types.ObjectId,
        ref:'Trainer',
        required:true
    },
    name:{
        required:true,
        enum:['Fitness','Boxing','Calistinics','Yoga','Zompa','Body Shape'],
    },
    price:{
        required:true,
        type:Number,    
    },
    start_in:{
        required:true,
        type:Date
    },
    end_in:{
        required:true,
        type:Date
    }


})

const Classes = mongoose.model('Classes',ClassesSchema)
module.exports = Classes