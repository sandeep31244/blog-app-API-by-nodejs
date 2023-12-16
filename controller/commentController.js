const Post= require("../models/postModel");
const Comment=require("../models/commentModel");


//logic
exports.createComment =async(req,res)=>{
    try{
            //fetch data from res body
            const {post, user, body}=req.body;

            // create a comment boject
            const comment= new Comment({post,user,body});

            // save the new commment into the database
            const savedComment = await comment.save();

            //find the post by ID and add the new comment to its cosmments array ,post vale collection me bhi change karenge
                //all work hone k bad update krna meaning of (new:true)
            const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                                        .populate("comments") // populate the comments array withe comment documents
                                        .exec();

            res.json({
                post:updatedPost,
                message:"Create comments successful..."
            })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while Creating comment",
        })
    }
}