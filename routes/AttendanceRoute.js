const express = require('express')

const router = express.Router()

const {AttenancP,AttendancG} = require('../controller/AttendanceController')
const {TrainerMiddleware} = require('../Midldleware/TrainerMiddleware')
const {AdminMiddelware} = require('../Midldleware/AdminMiddelware')
router.post('/attendace' , AdminMiddelware,AttenancP)
router.get('/attendace/:id' ,AdminMiddelware,TrainerMiddleware,AttendancG )

module.exports = router