import mongoose from "mongoose";

const userSchema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    assistantName:{
        type:String,
    },
    assistantImage:{
        type:Image
    },
    history:[
        {type:String}
    ]
},{timestamps:true})