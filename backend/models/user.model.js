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
        required:true,
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

export default  User = mongoose.model('User', userSchema);