import mongoose from "mongoose";

const gigSchema=new mongoose.Schema({
   userId:{
    type:String,
    required:true
   },
   title:{
    type:String,
    required:true
   },
   totalStars:{
    type:Number,
    default:0
   },
   starNumber:{
    type:Number,
    default:0
   },
   cat:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   cover:{
    type:String,
    required:true
   },
   shortDesc:{
    type:String,
    required:true
   },
   deliveryTime:{
    type:Number,
    required:true
   },
   revisionTime:{
    type:Number,
    required:true
   },
   images:{
    type:[String],
    required:false
   },
   features:{
    type:[String],
    required:false
   },
   salesNumber:{
    type:Number,
    required:0
   },

   
},{timestamps:true});

export default  User = mongoose.model('User', gigSchema);