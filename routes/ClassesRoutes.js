const express = require('express')

const router = express.Router()
const {ClassesP,ClassesG,AllClasses,leadth_classes,ClassesD,ClassesU} = require('../controller/ClassesContoller')
const {AdminMiddelware , AdminAndTrainer} = require('../Midldleware/AdminMiddelware')
// const {ClientMiddelware} = require('../Midldleware/ClientMiddelware')
// const {TrainerMiddleware} = require('../Midldleware/TrainerMiddleware')
router.post('/classes' , AdminMiddelware , ClassesP)
router.get('/classes/:id' , AdminAndTrainer("admin","trainer") ,ClassesG)
router.get('/classes/leanth/:id' , AdminAndTrainer("admin","trainer"),leadth_classes)
router.get('/classes' , AllClasses)
router.put('/classes/:id' , AdminMiddelware , ClassesU)
router.delete('/classes/:id' , AdminMiddelware , ClassesD)

module.exports = router
