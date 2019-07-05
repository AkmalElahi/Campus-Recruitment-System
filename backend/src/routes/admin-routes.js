const express = require('express');
const Admin = require('../models/admin-profile')
const routes = express.Router()


routes.post('/admin/login' , async (req,res)=>{
    try{
        console.log("in admin")
        const admin = await Admin.findOne({email:req.body.email,password:req.body.password})

        const token = await admin.generateToken()
        res.send({admin,token})
    }
    catch(e){
        res.status(400).send(e)
    }
 })

 module.exports= routes;