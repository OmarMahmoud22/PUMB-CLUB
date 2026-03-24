//--------------------------REQUERD--------------------
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose =require('mongoose')
app.use(express.json())
//------------------------AUTH_ROUTE-----------------------
const authRoutes = require('./routes/AuthRoute');
app.use('/api', authRoutes); 
//-------------------------TRANERS_ROUTE--------------------------
const trainersRoutes = require('./routes/TrainersRouts');
app.use('/api', trainersRoutes);
//--------------------------CLASSES_ROUTER----------------------------------------
const classesRoutes = require('./routes/ClassesRoutes');
app.use('/api', classesRoutes);
//--------------------------Client_ROUTER----------------------------
const ClientRouter = require('./routes/ClientRoute')
app.use('/api' , ClientRouter)
//--------------------------Enrollment_ROTER-----------------------------
const EnrollmentRouters = require('./routes/EnrollmentRouter')
app.use('/api' , EnrollmentRouters)
//--------------------------CONNECTION_DB----------------------------------

async function main() {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected")
    }
    catch(error){
        console.log(error)
    }
}
main()
//---------------------------------LISTEN_TO_PORT-------------------
app.listen(port,()=>{
    console.log(`connected with${port}`)
})


