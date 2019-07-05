const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Expecting correct Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    jobs:[
        {
            job: String,
            location: String,
            desc: String,
            positions:Number
            

        }]
        
})

companySchema.pre('save', async function (next) {
    const profile = this
    if (profile.isModified('password')) {
        profile.password = await bcrypt.hash(profile.password, 8)
    }
    next()
})
companySchema.statics.findByCredantials = async (email, password) => {
    const profile = await Company.findOne({ email })
    if (!profile) {
        throw Error("Email or password is wrong")
    }
    const isMatched = await bcrypt.compare(password, profile.password)
    if (!isMatched) {
        throw Error("Email or password is wrong")
    }
    return profile
}
companySchema.methods.generateToken = async function () {
    const profile = this
    const token = jwt.sign({ id: profile._id.toString() }, "mysecretkey")
    profile.tokens = profile.tokens.concat({ token })
    await profile.save()
    return token
}


const Company = mongoose.model('Company', companySchema)

module.exports = Company