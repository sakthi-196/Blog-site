import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import postRoutes from './routes/postRoutes.js'
import dotenv from "dotenv";
dotenv.config();
const app=express();
const PORT= process.env.PORT || 1920;
//view engine
app.set("view engine", "ejs");
//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))
//Db connection
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log('Connection successful'))
.catch((err) =>console.error(err.message))
//routes
app.use('/',postRoutes)
//error handling
app.use((req,res)=>{
    res.status(404).render('error',{message: 'page not found'})
})
//listening server
app.listen(PORT,()=>{
    console.log("Server is running on the port: "+PORT)
})