import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        requred:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:false,
    },
    desc:{
        type:String,
        required:false,
    },
    isSeller:{
        type:Boolean,
        default:false,
    },
   
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;