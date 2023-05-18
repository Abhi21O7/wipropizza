const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Name:{type:String , require},
    Email:{type:String , require},
    Password:{type:String , require},
    isAdmin:{type:Boolean , require, default: false},
}, {
    timestamps : true,
})

const User = mongoose.model('users', userSchema)

module.exports=User;