const express = require('express')

const router = express.Router()

const {AttenancP,AttendancG} = require('../controller/AttendanceController')
router.post('/attendace' , AttenancP)
router.get('/attendace/:id' ,AttendancG )

module.exports = router