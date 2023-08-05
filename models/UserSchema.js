const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilepic: {type:String,default:"",}
},
{
    timestamps: true,
    versionKey : false
} 
);

module.exports = mongoose.model('user', UserSchema);