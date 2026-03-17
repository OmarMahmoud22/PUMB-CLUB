const express = require('express')

const router = express.Router()
const {ClassesP,ClassesG} = require('../controller/ClassesContoller')
const AdminMiddelware = require('../Midldleware/AdminMiddelware')
router.post('/classes' , AdminMiddelware , ClassesP)
router.get('/classes/:id' , AdminMiddelware ,ClassesG)

module.exports = router