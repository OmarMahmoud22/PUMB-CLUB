const Trainer = require("../models/Traner")
const {TrainSchema} = require('../controller/validations/TrainValidations')

const Trainers = async (req, res) => {
  try {

    const { error, value } = TrainSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    })
    
    if (error) {
        return res.status(400).json({
            msg: error.details.map(err => err.message)
        })
    }
    
    const data = await Trainer.create(value)
    // console.log(data);
    // console.log(value);
    if(data) return res.status(201).json({msg: "done",data:data})


  } catch(error){
    res.status(500).json({
        msg:"server error",
        error:error.message
    })
}
}


const TranersG = async(req,res) =>{

try {
    //get data
    //populate
    //res
    const {userId,name,experience_years,rating,salary} = req.body
    const data = await Trainer.find({userId,name,experience_years,salary,rating})
    res.status(200).json({msg:"done",data})
} catch (error) {
    res.status(500).json({msg:"server error"})
}

}




module.exports = Trainers,TranersG