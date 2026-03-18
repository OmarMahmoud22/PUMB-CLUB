const Trainer = require("../models/Trainer");
const mongoose = require("mongoose");

const {
  TrainSchema,
  TrainUSchema,
} = require("../controller/validations/TrainValidations");

const Trainers = async (req, res) => {
  try {
    const { error, value } = TrainSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

  

    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }

    const data = await Trainer.create(value);
    // console.log(data);
    // console.log(value);
    if (data) return res.status(201).json({ msg: "done", data: data });
  } catch (error) {
    res.status(500).json({
      msg: "server error",
      error: error.message,
    });
  }
};

const TranersG = async (req, res) => {
  try {
    //get data
    //populate
    //res
    const { id } = req.params;
    const data = await Trainer.findById(id).populate("userId","-password -_id -createdAt -updatedAt");
    res.status(200).json({ msg: "done", data });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};


const TranersU = async (req, res) => {
  try {
    const { error, value } = TrainUSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error)
      return res.json({ msg: error.details.map((err) => err.message) });
    const id = req.params.id;

    const data = await Trainer.findByIdAndUpdate(id, value, { new: true });

    if (!data) return res.status(404).json({ msg: "not found" });

    res.status(201).json({ msg: "done", data });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};




const TrainderD = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Trainer.findByIdAndDelete(id);

    if (!data) return res.status(404).json({ msg: "Trainer not found" });

    res.status(200).json({
      msg: "Deleted successfully",
    });

  } catch (error) {
     res.status(500).json({msg: "Server error",error: error.message,
    })
  }
}



module.exports = { Trainers, TranersG, TranersU ,TrainderD};
