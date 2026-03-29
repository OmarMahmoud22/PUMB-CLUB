const jwt = require('jsonwebtoken')

const TrainerMiddleware = async (req ,res ,next)=>{
    try{
    const authheader = req.headers.authorization;
        if (!authheader) return res.status(404).json({msg:"where your token"})
    const token = authheader.split(" ")[1]
    const payload = await jwt.verify(token , process.env.JWT_SECRET)
    if(payload.role != 'trainer') return res.status(401).json({msg:"you cant do that ,just trainer"})
    next()
    }
    
    catch(error){
        res.status(500).json({msg:"server error"})
    }
}
module.exports = {TrainerMiddleware}