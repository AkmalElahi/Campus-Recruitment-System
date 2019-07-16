const express = require('express');
const Students = require('../models/student-profile')
const routes = express.Router()


routes.get('/student', async (req,res)=> {
    console.log("students")
    try{
       const profiles= await Students.find({})
        if(!profiles){
            res.status(404).send
        }
       res.send(profiles)
    }
    catch (e){
        res.status(500).send(e)
    }
})
routes.post('/student/register', async (req,res)=>{
    try{
        const student = await Students(req.body).save()

        const token = await student.generateToken()
        res.send(student)
    }
    catch(e){
        console.log(e.message)
        res.status(400)
        res.send(e)
    }
})

routes.post('/student/login' , async (req,res)=>{
    try{
        console.log("in login")
        console.log(req.body)
        const user = await Students.findByCredantials(req.body.email,req.body.password)

        const token = await user.generateToken()
        res.send({user, token})
    }
    catch(e){
        console.log(e.message)
        res.status(400).send(e)
    }
 })

 routes.delete('/student/delete',async (req,res)=>{
    
    try{
        console.log("in delete")
        console.log(req.query)
        const profile = await Students.findByIdAndDelete(req.query.id)

    if(!profile){
        res.status(404).send
    }
    res.send(profile)
    

    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports= routes