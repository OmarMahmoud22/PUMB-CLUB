const Attendance = require("../models/Attendance");
const Classes = require("../models/Classes");
const Trainer = require("../models/Trainer");
const {
  Attendance_Schema_Validations,
} = require("./validations/AttendaceValidations");

const AttenancP = async (req, res) => {
  try {
    const { error, value } = Attendance_Schema_Validations.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error)
      return res
        .status(401)
        .json({ msg: error.details.map((err) => err.message) });
    const { Class_id, Trainer_id, status } = value;
    const classs = await Classes.findById(Class_id);
    if (!classs) return res.status(404).json({ msg: "class not found" });
    const trainer = await Trainer.findById(Trainer_id);
    if (!trainer) return res.status(404).json({ msg: "Trainer not found" });
    const attend = await Attendance.create({ Class_id, Trainer_id, status });
    res.status(201).json({ msg: "done", data: attend });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
const AttendancG = async(req,res) =>{
    try{
    const {id} = req.params

    const attend = await Attendance.findById(id).populate([{
        path:'Class_id',
        select:'name start_in end_in'
    },{path:'Trainer_id',select:'name rating'}])
if(attend.leanght===0) return res.status(404).json({msg:"not found"})
    res.status(200).json({msg:"done",data:attend})
    }
    catch(error) {res.status(500).json({msg:"server error"})}
}
module.exports = {AttenancP , AttendancG}
