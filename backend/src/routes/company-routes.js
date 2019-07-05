const express = require('express');
const Company = require('../models/company-profile')
const routes = express.Router()

routes.get('/company', async (req,res)=> {
    console.log("in company")
    try{
       const profiles= await Company.find({})
        if(!profiles){
            res.status(404).send
        }
       res.send(profiles)
    }
    catch (e){
        res.status(500).send(e)
    }
})
routes.post('/company/register', async (req,res)=>{
    try{
        const company = await Company(req.body).save()

        const token = await company.generateToken()
        res.send(company)
    }
    catch(e){
        console.log(e.message)
        res.status(400)
        res.send(e)
    }
})
routes.post('/company/postjob', async (req,res)=>{
        console.log(req.body.job)
        try{
            const company = await Company.findById(req.body._id)
            //console.log(company)
            if(!company){
                res.status(404).send()
            }
            const job=req.body.job
            company.jobs.push({job:job.job,desc:job.desc,location:job.location,positions:job.positions})
            console.log(company)
           company.save()
            res.send(company)

        }
        catch(e){
            res.status(500).send(e)
        }

})
routes.post('/company/login' , async (req,res)=>{
    try{
        const user = await Company.findByCredantials(req.body.email,req.body.password)

        const token = await user.generateToken()
        res.send({user, token})
    }
    catch(e){
        res.status(400).send(e)
    }
 })

 routes.delete('/company/delete',async (req,res)=>{
    
    try{
        //console.log("in delete")
        //console.log(req.query)
        const profile = await Company.findByIdAndDelete(req.query.id)

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