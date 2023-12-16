const express=require("express")
const router=express.Router();

// import controller
const {dummyLink,likePost,unlikePost}=require("../controller/LikeController");
const {createComment}=require("../controller/CommentController");
const {createPost,getAllPosts}=require("../controller/PostController");




// mapping create
router.get("/dummyroute",dummyLink)
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)


// export
module.exports=router;