const express = require("express");

const router = express.Router();

const {
  EnrollmentP,
  EnrollmentG,
  EnrollmentD,
  EnrollmentGG,
  
} = require("../controller/EnrollmentController");
const {ClientMiddelware,ClientMiddlewareG , ClientAndAdmin} = require('../Midldleware/ClientMiddelware')
 const {AdminAndTrainer} = require("../Midldleware/AdminMiddelware");
// const {TrainerMiddleware} = require("../Midldleware/TrainerMiddleware")
router.post("/enrollment", ClientMiddelware ,EnrollmentP);
router.get("/enrollment",AdminAndTrainer("admin","trainer"), EnrollmentG);
router.get("/enrollment/:id", ClientMiddelware,ClientMiddlewareG, EnrollmentGG);
router.delete("/enrollment/:id",ClientAndAdmin,EnrollmentD)

module.exports = router;
