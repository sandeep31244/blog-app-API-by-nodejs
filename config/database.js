const mongoose = require("mongoose");
require("dotenv").config();
const connectWithDB=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB connection successfully...."))
    .catch((err)=>{
        console.log("Database connection fail...");
        console.log(err);
        process.exit(1);//connection close and return
    })
}


module.exports=connectWithDB;