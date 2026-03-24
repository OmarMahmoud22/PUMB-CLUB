const express = require("express");

const router = express.Router();

const {
  EnrollmentP,
  EnrollmentG,
  EnrollmentD,
  EnrollmentGG,
  
} = require("../controller/EnrollmentController");
const {ClientMiddelware,ClientMiddlewareG} = require('../Midldleware/ClientMiddelware')
const AdminMiddelware = require("../Midldleware/AdminMiddelware");
router.post("/enrollment", ClientMiddelware ,EnrollmentP);
router.get("/enrollment", AdminMiddelware, EnrollmentG);
router.get("/enrollment/:id", ClientMiddelware,ClientMiddlewareG, EnrollmentGG);
router.delete("/enrollment/:id",ClientMiddelware,EnrollmentD)

module.exports = router;
