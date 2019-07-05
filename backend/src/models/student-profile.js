const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const studentSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Expecting email!")
            }
        }
    },
    graduate:{
        type:Boolean,
        default:false
    },
    age:{
        type:Number,
        required:true,


    },
    major:{
        type:String,
        required:true,


    },
    CGPA:{
        type:Number,
        validate(value){
            if(value>4 || value<1){
                throw new Error("please enter valid CGPA")
            }
        }
    },
    password:{
        type:String,
        required:true,
        
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

studentSchema.pre('save',async function(next){
    const profile = this
    if(profile.isModified('password')){
        profile.password = await bcrypt.hash(profile.password,8)
    }
})
studentSchema.statics.findByCredantials = async (email,password)=>{
    const profile = await Students.findOne({email})
    if(!profile){
        throw Error("Email or password is wrong")
    }
    const isMatched = await bcrypt.compare(password, profile.password)
    if(!isMatched){
        throw Error("Email or password is wrong")
    }
    return profile
}
studentSchema.methods.generateToken  = async function(){
    const profile = this
    const token = jwt.sign({id:profile._id.toString()},"mysecretkey")
    profile.tokens = profile.tokens.concat({token})
    await profile.save()
    return token
}

const Students = mongoose.model('Students' , studentSchema)

module.exports=Students