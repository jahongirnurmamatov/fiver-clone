import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    converationId:{
        type:String,
        required:true,
    },
    UserId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
},{timestamps:true});

export default  User = mongoose.model('Message', messageSchema);