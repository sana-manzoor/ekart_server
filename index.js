require('dotenv').config()

const express=require('express')

const cors=require('cors')

require('./connection/db')

const router=require('./Routes/router')

const eKart=express()

eKart.use(cors())

eKart.use(express.json())

eKart.use(router)


const PORT=3000 || process.env.PORT

eKart.listen(PORT,()=>{
    console.log(`Ekart server started at Port:${PORT}`)
})

eKart.get('/',(req,res)=>{
    res.send("<h1>Daily cart started...waiting for client requests..!!</h1>")
})