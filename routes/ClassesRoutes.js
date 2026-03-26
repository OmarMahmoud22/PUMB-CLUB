const express = require('express')

const router = express.Router()
const {ClassesP,ClassesG,AllClasses,leadth_classes,ClassesD,ClassesU} = require('../controller/ClassesContoller')
const AdminMiddelware = require('../Midldleware/AdminMiddelware')
router.post('/classes' , AdminMiddelware , ClassesP)
router.get('/classes/:id' , AdminMiddelware ,ClassesG)
router.get('/classes/leanth/:id' , AdminMiddelware,leadth_classes)
router.get('/classes' , AllClasses)
router.patch('/classes/:id' , AdminMiddelware , ClassesU)
router.delete('/classes/:id' , AdminMiddelware , ClassesD)

module.exports = router