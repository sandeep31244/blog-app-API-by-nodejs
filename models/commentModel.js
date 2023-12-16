const mongoose=require("mongoose");


//route handler
const commentSchema=new mongoose.Schema({
    //kis post pr
    post:{
        type:mongoose.Schema.Types.ObjectId,//
        ref:"Post", //reference to the post model
    },
    user:{
        type:String,
        requied:true,
    },
    body:{
        type:String,
        required:true
    }
})

//exports
const comment=mongoose.model("Comment",commentSchema);
module.exports=comment;