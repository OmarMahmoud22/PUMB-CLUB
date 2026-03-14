require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose =require('mongoose')

app.use(express.json())

const login  = require('./routes/AuthRoute')
const register=  require('./routes/AuthRoute')
app.use('/api' , register)
app.use('/api' , login)



app.use(express.json())

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

app.listen(port,()=>{
    console.log(`connected with${port}`)
})