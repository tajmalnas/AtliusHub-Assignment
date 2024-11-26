const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();

const User = require('./models/users.js');
const Task = require('./models/Task.js');

app.use(cors());    
app.use(express.json());

require('dotenv').config()

mongoose.connect(process.env.MONGO_KEY).then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
}
);

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/auth/register',async (req,res)=>{
    const {userName,email,password} = req.body;
    if(!userName || !email || !password){
        return res.status(400).json({
            msg:"all fields are required"
        })
    }

    const userDoc = await User.create({
        userName,
        email,
        password
    });
    res.json(userDoc)
})


app.post('/auth/login',async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            msg:"all fields are required"
        })
    }

    const userDoc = await User.findOne({
        email:email
    });
    console.log(userDoc)
    if(userDoc?.password==password){
        res.json(userDoc)
    }
    else{
        res.status(400).json({
            msg:"incorrect passwrod"
        })
    }
})

app.post('/profileInfo', async (req,res)=>{
    const {email} = req.body;
    const userDoc = await User.findOne({
        email:email
    })
    UserInfo = {
        username:userDoc?.userName,
        email:userDoc?.email
    }
    console.log(UserInfo)
    res.json(UserInfo)
})

app.post('/getMyTasks', async (req,res) => {
    const {email} = req.body;
    const myTasks = await Task.find({
        email:email
    })
    res.json(myTasks)
})

app.post('/addMyTask', async (req,res)=>{
    const {email,newTaskName,newTaskStatus} = req.body;
    const newTask = await Task.create({
        email,
        taskName:newTaskName,
        taskStatus:newTaskStatus
    });
    await newTask.save();
    res.json(newTask)
})

app.listen(3000,()=>{
    console.log("port is listening at 3000");
})