const express = require('express');
const connect = require('./config/db');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const {register , login , getProfile} = require('./controller/user.controller')

app.post('/register' , register)

app.post('/login' , login)

app.post('/profile' , getProfile)

const start = async ()=>{
    await connect()
    app.listen(5000, () => {

        console.log("port 5000..");
    });

}




start()