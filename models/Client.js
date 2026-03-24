const { required } = require('joi');
const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:16
    },
    weight:{
        required:true,
      type:Number
    } ,
    height: {
        type:Number,
        required:true
    },

},{ timestamps:true });

const clinet = mongoose.model('Client', ClientSchema)
module.exports = clinet
