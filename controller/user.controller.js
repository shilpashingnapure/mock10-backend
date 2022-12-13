const express = require('express')

const router = express.Router()

const User = require('../models/register.model')

const register = async (req , res)=>{
    try{
        const user = await User.create(req.body);
        res.send(user)
    }catch(e){
        res.status(500).send(e.message)
    }
}

const login = async (req , res) =>{
    try{
        const user = await User.findOne({email : req.body.email})
        console.log(user)
        if(user.password == req.body.password){
            res.send(user)
        }else{
            res.send('please check your password again..')
        }

    }catch(e){
        res.status(500)
    }
}

const getProfile = async (req , res)=>{
    try{
        const user = await User.findOne({ _id : req.body._id})
        console.log(user)
        res.send(user)
    }catch(e){
        res.status(500)
    }
}

module.exports = {register , login , getProfile}