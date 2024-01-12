 let express = require("express");
 let app = express();
 let fs = require("fs");
 let users = require("./MOCK_DATA.json") ;
 const mongoose = require("mongoose");
const { userInfo } = require("os"); 
const { join } = require("path");
  app.use(express.urlencoded({extended:false}));

//    to connect moongose to database
// it will give promise

  mongoose.connect("mongodb://127.0.0.1:27017/anyNameOfDatabase")
  .then(()=>console.log("the database is connected with mongosoe"))
  .catch((err)=> console.log("u made an error",err));


  const userSchema = new mongoose.Schema({
   firstName:{
      type:String,
      // required true matlab wo value input dena compulsary hai 
   },
   // lastName:{
   //    type:String,
       // wo value input dena not required
   // },
   // email:{
   //    type:String,
   //    unique:true,
    
   // },
   // gender:{
   //    type:String,
      
   // },
  
 

   });


   const User = mongoose.model('user',userSchema) ;
   // ye jo user hai wo collection ho jaega db mai 
   //aur plural ho jaega



//  app.get("/",(req,resp)=>{

//     resp.json(users);
//  })

  app.post("/api/users",async(req,resp)=>{

    const body =req.body;
    console.log("body",body);
   //  if(
      
   //    !body.first_name||
   //    !body.last_name||!body.email||!body.gender)
   //     {
   //       return resp.status(400).json({status:"fail"});

   //    }
    


    const result  =  await User.create({
       firstName:body.first_name,
      //  lastName:body.last_name,
      // email:body.email,
      // gender:body.gender,
      
      

    });

     console.log( "result",result);
  resp.status(201).json({msg:"success"})


   
  })
//  app.listen(3000,(err)=>{

//     console.log("server is running")
//  });

// app.patch("/api/patch/:id",(req,resp)=>{

//    const userid = Number(req.params.id);
//   let val = users.find((data)=>{

//      return data.id ==userid;
//    })
//    // to find index 
//    let index = users.indexOf(val); // if id is 4 index is 3
//    let body = req.body ;
//   const changedVal = Object.assign(val,body)// it is used 2 merge 2 object and
//    // what ever changes are there it will be updated in 1st 
//    users[index]= changedVal; 
//    // to write the changed value in ffs we use 
//    fs.writeFile(("./MOCK_DATA.json"),JSON.stringify(users),(err,data)=>{
//       resp.json(val); 
//    })

// })

// app.delete("/delete/:id",(req,resp)=>{
// let userid = Number(req.params.id);

// let val = users.find((data)=>{

//    return data.id== userid;
// })
// const index = users.indexOf(val);
// users.splice(index,1)// splice ke andhar pehla element index hota hai aur
// dusra element no of element to deleteS
// fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{

//  resp.send(" ho jaega")
// })

// });

app.listen(5000,(err)=>{

      console.log("server is running")

   });
