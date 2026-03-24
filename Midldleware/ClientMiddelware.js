const jwt = require("jsonwebtoken");
const Enrollment = require("../models/Enrollmment");



const ClientMiddelware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).json({ msg: "not found this token" });

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload.role !== "client")
      return res.status(403).json({ msg: "only client can do this" });

    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "server error" });
  }
};


const ClientMiddlewareG = async (req, res, next) => {
  try {
    const { id } = req.params;
    const enroll = await Enrollment.findById(id).populate("Client_id");
    if(!enroll) return res.status(404).json({msg:"not found"})

     if (enroll.Client_id._id.toString() !== req.user._id){
      return res.status(401).json({ msg: "you cant do this" });
    }
    next()
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
module.exports = {ClientMiddelware,ClientMiddlewareG}
