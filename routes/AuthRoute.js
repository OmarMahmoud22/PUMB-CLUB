const express = require("express");

const router = express.Router();

const {register,login,changeRole,logout} = require('../controller/AuthController')

const {AdminMiddelware , checkStatus} = require('../Midldleware/AdminMiddelware')
router.post("/register", register);
router.post("/login",  checkStatus ,login);
router.put("/changroll/:id", AdminMiddelware, changeRole)
router.get("/logout", logout)

module.exports = router;
