const express = require('express')

const router=express.Router()
const user=require('../models/userModel')

router.post('/register',(req,res)=>{
  
  user.find({email:req.body.email})
  .then((data)=>{
  
    if(data.length>0){
    
      res.status(400).json({message:"Email already registered"})
    }else{
      
      var data=new user({
         name:req.body.name,
         email:req.body.email,
         password:req.body.password
      })
      console.log(data)
      data.save()
      .then((data)=>{res.send(data)})
      .then((error)=>{console.log(error)})
    }
  })
  
 

})

router.post('/login',(req,res)=>{

    user.find({ email:req.body.email})
    .then((data)=>{
         if(data.length>0){
            const user={
               name:data[0].name,
               _id:data[0]._id,
               email:data[0].email
            }
            console.log(data)
            res.send(user)
         }else{
            return res.status(400).json({message:'Invalid Credentials'})
         }
    })
    
})

module.exports=router;