const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AdminSchema = mongoose.Schema({
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
    }
}) 
AdminSchema.methods.generateToken = async function () {
    const profile = this
    const token = jwt.sign({ id: profile._id.toString() }, "mysecretkey")
    //profile.tokens = profile.tokens.concat({ token })
    //await profile.save()
    return token
}
// AdminSchema.statics.findByCredantials = async (email, password) => {
//     const profile = await Admin.findOne({ email })
//     if (!profile) {
//         throw Error("Email or password is wrong")
//     }
//     const isMatched = await bcrypt.compare(password, profile.password)
//     if (!isMatched) {
//         throw Error("Email or password is wrong")
//     }
//     return profile
// }

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin