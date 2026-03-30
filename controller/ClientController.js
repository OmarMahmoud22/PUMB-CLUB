const Client = require('../models/Client')

const {ClientValidation} = require('./validations/ClientValidator')
const ClientP = async (req,res)=>{
    try{
    const {error , value} = ClientValidation.validate(req.body,{
        abortEarly:false,
        stripUnknown:true
    })
    if(error) return res.status(404).json({msg:error.details.map(err => err.message)})
        const {userId , name , age , weight , height} = value
    const client = await Client.create({userId , name , age , weight , height})
    res.status(201).json({msg:"done" , client})
    }
    catch(error){return res.status(500).json({msg:"server error"})}
}

const ClientG = async (req,res)=>{
    try{

    const {id} =req.params
    const clint = await Client.findById(id)
    // console.log(clint);
    if(!clint) return res.status(404).json({msg:"not found this client"})
     res.status(200)   .json({msg:"done",clint})
}
catch(error){
    res.status(500).json({msg:"server error"})
}
}
const AllClient = async(req,res)=>{
    try {
        const data = await Client.find()
        if(!data) return res.status(404).json({msg:"not found"})
         res.status(200).json({msg:"done",all_client:data})
    } catch (error) {
        res.status(500).json({msg:"server error"})
    }
}
module.exports = {ClientP, ClientG , AllClient}