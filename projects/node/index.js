const express= require("express");
const app =express();
const moongose = require("mongoose");
moongose.connect("mongodb://127.0.0.1:27017/data")
.then(()=>console.log("kar lavde koshis kar"))
.catch(" error hai bhaiya");
const sch = new moongose.Schema({

    name:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    }
})
const User = new moongose.model("user",sch)
