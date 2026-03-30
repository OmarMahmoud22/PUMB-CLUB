const express = require("express");

const router = express.Router();

const {register,login,changeRole,logout,GetAllUsers} = require('../controller/AuthController')

const {AdminMiddelware , checkStatus} = require('../Midldleware/AdminMiddelware')
router.post("/register", register);
router.post("/login",  checkStatus ,login);
router.put("/changroll/:id", AdminMiddelware, changeRole)
router.get("/logout", logout)
router.get("/getallusers" , AdminMiddelware ,GetAllUsers)
module.exports = router;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2EzNTdhNDIzMWQ1MzNmODU0OWRlZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NDg1OTgwMSwiZXhwIjoxNzc0OTQ2MjAxfQ.Esq20bX8LyHsDTzRqQJTF7EIENRT0SQUSQX56YJmqhg
