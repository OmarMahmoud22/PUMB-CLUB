const express = require('express')

const router = express.Router()

const {AttenancP,AttendancG} = require('../controller/AttendanceController')
const AdminMiddelware = require('../Midldleware/AdminMiddelware')
router.post('/attendace' , AdminMiddelware,AttenancP)
router.get('/attendace/:id' ,AdminMiddelware,AttendancG )

module.exports = router