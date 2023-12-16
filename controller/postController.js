const Post= require("../models/postModel");



//logic

exports.createPost =async(req,res)=>{
    try{
            //fetch data from res body
            const {title, body}=req.body;
            // console.log(req.body);

            // create a post boject
            const post= new Post({title, body});
            // console.log(post);

            // save the new commment into the database
            const savedPost =await post.save();

            res.status(200).json(
                {
                    success:true,
                    data:savedPost,
                    message:'Post created successfully...'
                }
            );
    }
    catch(error){
        return res.status(400).json({
            error:"Error post server",
        })
    }
}

//for all post fath krne k liye
exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while fatching posts",
        })
    }
}