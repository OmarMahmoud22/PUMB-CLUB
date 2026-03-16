const { required } = require('joi');
const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({

    userId:{
        type:mongoose.Types.ObjectId,
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
        required:true,
      type:Number
    },

},{ timestamps:true });

const clinet = mongoose.model('Client', ClientSchema)
module.exports = clinet
