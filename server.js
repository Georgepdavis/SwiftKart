const express=require("express");
const app=express();
const bodyparser=require('body-parser')
var dbconnection=require('./db');
var productsRoute=require('./routes/productsRoute');
var userRoute=require('./routes/userRoute')
var cors=require("cors");
const path=require("path")
const port=8000;

app.use(cors({origin:"http://localhost:3000", credentials: true}))
app.use(express.json())

app.use('/api/products/',productsRoute);
app.use('/api/users/',userRoute)
app.get("/",(req,res)=>{
    res.send('This is from backend');
})

// if(process.env.NODE_ENV === "production"){

//     app.use('/', express.static('frontend/build'))

//     app.get('*', (req,res)=>{
//         res.sendFile(path.resolve(__dirname,'frontend/build/index.html'))
//     })
// }

// const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})