const express = require("express");

const router = express.Router();

const {
  EnrollmentP,
  EnrollmentG,
  EnrollmentD,
  EnrollmentGG,
  
} = require("../controller/EnrollmentController");
const {ClientMiddelware,ClientMiddlewareG} = require('../Midldleware/ClientMiddelware')
const {AdminMiddelware} = require("../Midldleware/AdminMiddelware");
const {TrainerMiddleware} = require("../Midldleware/TrainerMiddleware")
router.post("/enrollment", ClientMiddelware ,EnrollmentP);
router.get("/enrollment",TrainerMiddleware, AdminMiddelware, EnrollmentG);
router.get("/enrollment/:id", ClientMiddelware,ClientMiddlewareG, EnrollmentGG);
router.delete("/enrollment/:id",AdminMiddelware,ClientMiddelware,EnrollmentD)

module.exports = router;
