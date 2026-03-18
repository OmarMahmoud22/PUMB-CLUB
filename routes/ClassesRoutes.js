const express = require('express')

const router = express.Router()
const {ClassesP,ClassesG,leadth_classes} = require('../controller/ClassesContoller')
const AdminMiddelware = require('../Midldleware/AdminMiddelware')
router.post('/classes' , AdminMiddelware , ClassesP)
router.get('/classes/:id' , AdminMiddelware ,ClassesG)
router.get('/classes/leanth/:id' , AdminMiddelware,leadth_classes)

module.exports = router