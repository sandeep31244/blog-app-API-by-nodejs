const express=require("express");
require("dotenv").config();
express.Router();

const app =express();
const PORT=process.env.PORT||3000;

//midleware body me se json provided krene me help krta hai
app.use(express.json());

const blog =require("./routes/blog");

//mount
app.use("/api/v1",blog);


const connectWithDB=require("./config/database");
connectWithDB();

// start server
app.listen(PORT,()=>{
    console.log(`Port is ${PORT}`);
})

//default route
app.get("/",(req,res)=>{
    res.send("<h1>This Home page</h1>");
})