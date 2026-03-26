const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { regesterSchema, LoginSchema } =require('../controller/validations/AuthValidation');


const register = async (req, res) => {
  try {
    const {error , value} = regesterSchema.validate(req.body,{
      //req.body to do validate on req.body
      //abortEarly:false => to get all error once
      //stipeUnkone => send what u type in schema
      abortEarly:false,
      stripUnknown:true
    }) 
    if (error){
      return res.status(400).json({
        msg:error.details.map((err) => err.message)
      })


    }
    const {name , email , password , role} = value
    const existing = await User.findOne({ email })
 
   if(existing){
   return res.status(400).json({msg:"already exists"})
 }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role
    });

    const token = jwt.sign({ id: user._id, role: user.role }
      , process.env.JWT_SECRET,
       { expiresIn: "1h" });


    res.status(201).json({
      msg: "User registered successfully",
      token:token
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

const login = async (req, res) => {
  try {
     const {error , value} = LoginSchema.validate(req.body,{
      //req.body to do validate on req.body
      //abortEarly:false => to get all error once
      //stipeUnkone => send what u type in schema
      abortEarly:false,
      stripUnknown:true 
    })
    if (error){
      return res.status(400).json({
        msg:error.details.map((err) => err.message)
      })

    }
    const {email , password} = value;
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({msg:"this email is not found"})
    const mathchpassword = await bcrypt.compare(password , user.password)
  console.log(await bcrypt.compare(password, user.password));
  if(!mathchpassword) return res.status(400).json({msg:"invalid bassword"})
    
    const token = jwt.sign(

      {id: user._id,role:user.role},
      process.env.JWT_SECRET,
      {expiresIn:"1d"}

  )

    
res.status(200).json({msg:"log in success", token})
     
  } catch (error) {
    console.log(error);
  }
};
const logout = async (req , res)=>{
  try{
    res.status(200).josn({msg:"logged out"})
  }
  catch(error){
    res.status(500).json({msg:"server error",error: error.message})
  }
  
}

module.exports = {
  register,
  login,
  logout
};




