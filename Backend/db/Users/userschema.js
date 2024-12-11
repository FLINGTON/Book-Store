
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     email:{
        type:String,
        require:true,
        unique:true
     },
    password: {
        type:String,
        require:true,
    },
userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        
    }
})

const user =mongoose.model('users',UserSchema);
module.exports=user;