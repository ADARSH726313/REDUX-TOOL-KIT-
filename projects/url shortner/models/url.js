const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({

    shortId:{
        
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timeStamp:{type: Number}}],

},  {timestamps:true}
);
const URL = mongoose.model("url",urlSchema);    
module.exports=URL;