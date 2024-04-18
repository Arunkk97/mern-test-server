require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/connection')

const mernServer=express()

mernServer.use(cors())
mernServer.use(express.json())
mernServer.use(router)

const PORT=3000 || process.env.PORT

mernServer.listen(PORT,()=>{
    console.log(`mernServer started at PORT : ${PORT}`);
})

mernServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">mernServer started and waiting for client request!!!</h1>`)
})