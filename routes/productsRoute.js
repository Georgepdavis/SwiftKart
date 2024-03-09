const express=require('express');

const router=express.Router();
const product=require('../models/productModel');



router.get("/getallproducts",(req,res)=>{

    product.find()
    .then((data)=>{res.json(data)})
    .catch((error)=>{res.json({message:'Something Went Wrong'})})    
    
})

router.post("/getproductbyid",(req,res)=>{
    console.log(req.body)
    product.find({_id:req.body.id})
    .then((data)=>{
        res.json(data)
        console.log(data)
    })
    .catch((error)=>{res.json({message:'Something Went Wrong'})})
})


module.exports=router;