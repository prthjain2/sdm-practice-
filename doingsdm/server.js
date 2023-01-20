const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})

app.get('/schedule',(req,resp)=>{
    resp.sendFile('public/schedule.html',{root:__dirname})
})

app.listen(3000)
console.log("Server Running at Port 3000")