const express = require("express");

const routes = express.Router();

const Trainers = require("../controller/TrainerController");
const TranersG = require("../controller/TrainerController");
const AdminMiddelware = require("../Midldleware/AdminMiddelware");
routes.post("/Traners", AdminMiddelware, Trainers);
routes.get("/Traners", AdminMiddelware, TranersG);
module.exports = routes;
