import Posts from "../models/postModel.js"
//display blog page
export const displayBlog= async(req,res)=>{
    try{
        const posts=await Posts.find().sort({updatedAt:-1,createdAt:-1});
        res.render('blogs.ejs',{posts: posts || []})
    }catch(err){
        console.error(err)
        res.status(500).send("Internal server error")
    }
}
// compose post
export const addPost=async (req,res)=>{
    try{
        let post={
            Title:req.body.Title,
            Content: req.body.Content,
            Author: req.body.Author,
        };
        const data=Posts(post)
        await data.save()   
        res.redirect('/blogs')
    }catch (error){
        console.error('error in adding post: ',error)
        res.status(500).send('Failed to add post')
    }                                                                                                         
}
//display composed  single post
export const singlePost= async (req,res)=>{
    try{
        const postId=req.params.id;
        const post=await Posts.findById(postId)
        if(post){
            res.render("post",{
                postId:postId,
                Title:post.Title,
                Content:post.Content,
                Author:post.Author,
                createdAtTime: post.createdAt,
                updatedAtTime: post.updatedAt
            })
        } else{
            res.status(404).send("Post not found")
        }
    }catch (err){
        console.error(err);
        if(err.kind === "ObjectId"){
            res.status(400).send("Invalid post ID")
        }else{
            res.status(500).send("Internal server error")
        }
    }   
}
//to edit a post(get)

export const getEditPost=async (req,res)=>{
    try{
        const postId=req.params.id;
        const post=await Posts.findById(postId)
        if(post){
            res.render("edit",{
                postId:postId,
                Title:post.Title,
                Content:post.Content,
                Author:post.Author,
            })
        } else{
            res.status(404).send("Post not found")
        }
    }catch (err){
        console.error(err);
        if(err.kind === "ObjectId"){
            res.status(400).send("Invalid post ID")
        }else{
            res.status(500).send("Internal server error")
        }
    }
}
//post a edited post
export const addEditPost=async (req,res)=>{
    try{
        const postId=req.params.id;
        const updatedPost=await Posts.findByIdAndUpdate(postId,{
            Title:req.body.Title,
            Content:req.body.Content,
            Author:req.body.Author,
        },{new: true});
        if(updatedPost){
            res.redirect('/blogs')
        }else{
            res.status(404).send("Post not found")
        }
    }catch(err){
        console.error(err.message)
        if (err.kind === "ObjectId") {
            res.status(400).send("Invalid post ID");
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}
//delte a post

export const deletePost=async (req,res)=>{
    try{
        const postId=req.params.id;
        const deletePost=await Posts.findByIdAndDelete(postId)
        if(deletePost){
            res.redirect("/blogs")
        }else{
            res.status(404).send("Post not found")
        }
    }catch(err){
        console.error(err.message)
        if (err.kind === "ObjectId") {
            res.status(400).send("Invalid post ID");
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}


