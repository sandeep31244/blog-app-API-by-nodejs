const mongoose=require("mongoose");


//route handler
const likeSchema=new mongoose.Schema({
    //kis post pr
    post:{
        type:mongoose.Schema.Types.ObjectId,//
        ref:"Post", //reference to the post model
    },
    //kon like kr rha hai
    user:{
        type:String,
        requied:true,
    }
})

//exports
module.exports=mongoose.model("Like",likeSchema);