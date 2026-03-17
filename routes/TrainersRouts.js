const express = require("express");

const routes = express.Router();

const {Trainers,TranersG,TranersU,TrainderD} = require("../controller/TrainerController");
const AdminMiddelware = require("../Midldleware/AdminMiddelware");
routes.post("/Traners", AdminMiddelware, Trainers);
routes.get("/Traners/:id",AdminMiddelware, TranersG);
routes.put('/Traners/:id',AdminMiddelware,TranersU)
routes.delete('/Traners/:id',TrainderD)
module.exports = routes;



