import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Author:{
        type:String,
    },
    Content:{
        type:String,
        required:true,
    },
},{timestamps:true});
const posts = mongoose.model('posts',postSchema);
export default posts;