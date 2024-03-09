const mongoose=require("mongoose");
const mongoDBURL="mongodb+srv://georgepdavis24:6Mcju9mlXxZb9KXT@cluster0.qgx5cal.mongodb.net/SwiftCart";
mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true});
var dbconnect=mongoose.connection;

dbconnect.on('error',()=>{
    console.log("Mongo DB Connection Failed");
});

dbconnect.on('connected',()=>{
    console.log("Mongo DB Connection Succesful")
});
module.exports=mongoose;