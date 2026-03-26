const Classes = require('../models/Classes')
const {ClassesSchema , ClassesSchemaU} = require('../controller/validations/ClassesValidation')

const ClassesP = async (req , res) =>{
    try{
    const {error , value} = ClassesSchema.validate(req.body,{
        abortEarly:false,
        stripUnknown:true
    })
    
  if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }

    const {trainerId,name,price,start_in,end_in} = value
    const data = await Classes.create({trainerId,name,price,start_in,end_in})
    
    if(!data) return  res.status(404).json({msg:"no data posted yet"})
    res.status(201).json({msg:"created" , data})
    
}
catch(error){
    console.log(error);
    
    res.status(500).json({msg:"server error"})
}};


const ClassesG = async (req , res) =>{
    try {
        const {id} = req.params
        const classs = await Classes.findById(id).populate("trainerId")
        if(!classs) return res.status(404).json({msg:"id is not valid"})
        res.status(201).json({msg:"done" , classs})

        
    } catch (error) {
        res.status(500).json
    }
}


const leadth_classes = async (req, res) => {
    try{
  //get id from front end
  const {id} = req.params
  //find by id and mack sure the id of trainer  = id sent it
  const classess = await Classes.find({trainerId:id}).populate({
        path: "trainerId",
        select: "name rating experience_years"});
  //validate if trainer is not defind
  if (classess===0) return res.status(404).json({msg:"this traner has not classes"})
  res.status(200).json({
      msg: "done",
      total_length: classess.length,
      trainer: classess[0].trainerId, // select id once
      classes: classess.map(item => ({
        name: item.name,
        price: item.price
      }))
    });
                        


}
catch(error){
    res.status(500).json({msg:"server error"})
}

}
const ClassesD = async (req,res)=>{
try{
    const {id}= req.params
    const classs = await Classes.findByIdAndDelete(id)
    if(!classs) return res.status(404).json({msg:"not found"})
    res.status(201).json({msg:"done deleted"})
}
catch(error){res.status(500).json({msg:"server error"})}
}
const ClassesU =async (req,res)=>{
try{
    const {error , value} = ClassesSchemaU.validate(req.body,{
        abortEarly:false,
        stripUnknown:true
        
    })
    if(error)return res.status(404).json({msg:error.details.map(err => err.message)})
    const {id} =req.params
    const clas = await Classes.findByIdAndUpdate(id , value, { new: true });
    if(!clas) return res.status(404).json({msg:"this id is not defind"})
    res.status.json({msg:"updated done"})    



}
catch(error){
    res.status(500).json({msg:"server error"})
}
}
const AllClasses = async(req,res)=>{
    try {
        const data = await Classes.find()
        res.status(200).json({msg:"done" , data})
    } catch (error) {
        res.status(500).json({msg:"server error"})
    }
}

module.exports = {ClassesP , ClassesG,leadth_classes , ClassesD , ClassesU , AllClasses}