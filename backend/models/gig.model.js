import mongoose from "mongoose";

const gigSchema=new mongoose.Schema({
   
   
},{timestamps:true});

export default  User = mongoose.model('User', gigSchema);