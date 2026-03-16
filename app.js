//--------------------------REQUERD--------------------
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose =require('mongoose')
app.use(express.json())
//------------------------AUTH_ROUTE-----------------------
const login  = require('./routes/AuthRoute')
const register=  require('./routes/AuthRoute')
const logout =  require('./routes/AuthRoute')
app.use('/api' , register)
app.use('/api' , login)
app.use('/api' , logout)
//-------------------------TRANERS_ROUTE--------------------------
const Traners = require('./routes/TrainersRouts')
const TranersG = require('./routes/TrainersRouts')
app.use('/api',Traners)
app.use('/api',TranersG)

//--------------------------CONNECTION_DB----------------------------------
async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URL)
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