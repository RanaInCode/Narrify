const express = require('express');
const app = express();
const { User } = require('./schema/userSchema');
const { BlogPost } = require('./schema/blogPostSchema');
const mongoose  = require('mongoose');
const cors = require('cors');
require('dotenv').config();





mongoose.connect(process.env.MONGODB_URI)
.then((value)=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("Error connecting to database", process.env.MONGODB_URI);
});


app.use(cors());

app.use(express.json());

app.post('/signup', async(req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const userExist = await User.findOne({username, email});
    if(!userExist){
        await User.create({username, email, password});
        res.json({msg: "User created successfully"});
    }
    else{
        res.status(409).json({msg: "User already exist"});
    }
})

app.post('/login', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const userExist = await User.findOne({email, password});
    if(!userExist){
        res.status(403).json({msg: "Wrong email or password"})
    }
    else{
        res.json({msg: "Login successful"});
    }
})

app.post('/create-blogs', async(req, res)=>{
    try{
    const title = req.body.title;
    const author = req.body.author;
    const blog = req.body.blog;
    await BlogPost.create({title, blog, author});
    res.status(201).json({msg: "Blog created successfully"});  
    } catch(err){
        res.status(400).json({msg: "Error creating blogPost"})
    } 
})

app.get('/blogs', async(req, res)=>{
    const blogs = await BlogPost.find({});
    res.json({blogs});
})

app.listen(3000);





