const jwt = require('jsonwebtoken')


const AdminMiddelware = async(req,res,next)=>{
    try{
const authheader = req.headers.authorization;
// console.log(authheader);
if(!authheader) return res.status(401).json({msg:"token is not found"})
const token = authheader.split(" ")[1]
// console.log(token);
const payload = jwt.verify(token , process.env.JWT_SECRET)

// console.log(payload);
// {
//   id: '69b5b74acf52f59fddeeeeff',
//   role: 'admin',
//   iat: 1773655849,
//   exp: 1773742249
// }

if(payload.role !== "admin") return res.status(403).json({msg:"only admin can do this"})
next()
    }
    catch(error){
       return  res.status(401).json({msg:"token is invalid"})
        
    }
}


module.exports = AdminMiddelware