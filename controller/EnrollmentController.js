const Enrollment = require("../models/Enrollmment");
const Client = require("../models/Client");
const Classes = require("../models/Classes");

const {
  EnrolmentValidation,
  EnrolmentValidationU,
} = require("./validations/EnrollmentValidations");

const EnrollmentP = async (req, res) => {
  try {
    const { error, value } = EnrolmentValidation.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error)
      return res
        .status(400)
        .json({ msg: error.details.map((err) => err.message) });
    const { Client_id, Classes_id, status } = value;
    //client id valid
    const client = await Client.findById(Client_id);
    if (!client) return res.status(404).json({ msg: "client not found" });
    //class id valid
    const classs = await Classes.findById(Classes_id);
    if (!classs) return res.status(404).json({ msg: "classes is not found" });
    //calss is exist valid
    const exist = await Enrollment.findOne({ Client_id, Classes_id });
    if (exist) return res.status(401).json({ msg: "cant do same counrse" });
    //create
    const enroll = await Enrollment.create({ Client_id, Classes_id, status });

    res.status(201).json({ msg: "done", data: enroll });
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "server error" });
  }
};

const EnrollmentG = async (req, res) => {
  try {
    const enroll = await Enrollment.find().populate([
      {
        path: "Client_id",
        select: "name age weight height",
      },
      { path: "Classes_id", select: "name price start_in end_in" },
    ]);
    if (enroll.length === 0)
      return res.status(404).json({ msg: "no enrollment for this" });
    res.status(200).json({ msg: "done", data: enroll });
  } catch (error) {
    res.status(500).json({ msg: "sercer error" });
  }
};
const EnrollmentD = async (req, res) => {
  try {
    const { id } = req.params;
    const enroll = await Enrollment.findByIdAndDelete(id);
    if (!enroll) return res.status(404).json({ msg: "not found" });
    res.status(201).json({ msg: "done deleted" });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
const EnrollmentGG = async (req, res) => {
  try {
    const { id } = req.params;
    const enroll = await Enrollment.findById(id).populate([
      {
        path: "Client_id",
        select: "name age weight height",
      },
      { path: "Classes_id", select: "name price start_in end_in" },
    ]);
    if (!enroll) return res.status(404).json({ msg: "not found" });
    res.status(200).json({ msg: "done", data: enroll });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
module.exports = { EnrollmentP, EnrollmentG, EnrollmentD ,EnrollmentGG};
