const Classes = require('../models/Classes')
const {ClassesSchema} = require('../controller/validations/ClassesValidation')

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
  //find by id 
  const classess = await Classes.find({trainerId:id})
  //validate if trainer is not defind
  if (!classess) return res.status(404).json({msg:"this id is not defind"})
  res.status(201).json({msg:"done get it"
                        ,total_leangth:classess.length,
                        classs_name:classess.map(item => item.name)
})

}
catch(error){
    res.status(500).json({msg:"server error"})
}
}


module.exports = {ClassesP , ClassesG,leadth_classes}