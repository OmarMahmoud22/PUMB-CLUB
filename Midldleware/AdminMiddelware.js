const jwt = require('jsonwebtoken')
const User = require('../models/User')

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
    req.user = payload;
next()
    }
    catch(error){
       return  res.status(401).json({msg:"token is invalid"})
        
    }
}






const checkStatus = async (req, res, next) => {
    try {
        const authheader = req.headers.authorization;
        if (!authheader) {
            return res.status(401).json({ msg: "no token" });
        }
        const token = authheader.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(payload.id);
        if (!user) {
            return res.status(404).json({ msg: "user not found" });
        }
        if (user.stauts !== "approved") {
            return res.status(403).json({ msg: "wait for admin approval" });
        }
        
req.user = payload;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error" });
    }
};

const AdminAndTrainer = (...roles) => {
    return (req, res, next) => {
        try {
            const authheader = req.headers.authorization;
            if (!authheader) return res.status(404).json({ msg: "where your token" });

            const token = authheader.split(" ")[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET);

            if (!roles.includes(payload.role)) {
                return res.status(403).json({ msg: "not allowed" });
            }

            req.user = payload;
            next();
        } catch (error) {
            res.status(500).json({ msg: "server error" });
        }
    };
};

module.exports = {AdminMiddelware , checkStatus ,AdminAndTrainer}