import express, { Router } from 'express'
import {displayBlog,addPost,singlePost,getEditPost,addEditPost,deletePost} from "../controllers/postController.js";
//const router=express.Router();
const router=Router();

router.get("/",(req,res)=>{
    res.render("index.ejs")
})
router.get("/compose",(req,res)=>{
    res.render("compose.ejs")
})
router.get("/about",(req,res)=>{
    res.render("about.ejs")
})
router.get("/blogs",displayBlog);   
router.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})
router.post("/compose",addPost)
router.get("/posts/:id",singlePost)
router.get("/edit/:id",getEditPost)
router.post("/edit/:id",addEditPost)
router.get('/delete/:id',deletePost)

export default router;