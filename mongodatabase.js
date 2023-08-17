const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Create_Election").then(()=>{
    console.log("Connected successfully to MongoDB"); 
}).catch((err)=>{
    console.log("Errors connecting to database");
});
var connect=mongoose.connection

const mongoose=require('mongoose');
const reg_det= new mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },
    LastName : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true
    },
    PhoneNumber : {
        type:Number,
        required:true
    },
    Password : {
        type:String,
        required:true
    },
})    


const mongoose=require('mongoose');
const users = new mongoose.Schema({
Title : {
type:String,
required:true
},
StartTime : {
type:Date,
required:true
},
EndTime : {
type:Date,
required:true
}
})
//Collection/Table
const Create_Election=new mongoose.model("Create_Election_details",users);
module.exports=Create_Election;


const mongoose=require('mongoose');
const users = new mongoose.Schema({
Name : {
type:String,
required:true
},
Email : {
type:String,
required:true
},
Description: {
type:String,
required:true
}
})
//Collection/Table
const candidate_details=new
mongoose.model("candidate_details",users);
module.exports=candidate_details;

const mongoose=require('mongoose');
const log_det= new mongoose.Schema({
Name : {
type:String,
required:true
},
Email : {
type:String,
required:true
},
Password : {
type:String,
required:true
}
})
//Collection/Table
const Create_login=new mongoose.model("login_details",log_det);
module.exports=Create_login;

const mongoose=require('mongoose');
const voter_det= new mongoose.Schema({
Name : {
type:String,
required:true
},
Email : {
type:String,
required:true
},
VoterID : {
type:String,
required:true
},
VoterKey:{
type:String,
required:true
}
})
//Collection/Table
const Voter_det=new mongoose.model("voter_det",voter_det);
module.exports=voter_det;


const mongoose=require('mongoose');
const Voterlogin_det= new mongoose.Schema({
Name : {
type:String,
required:true
},
VoterID : {
type:Number,
required:true
},
VoterKey : {
type:String,
required:true
},
})
//Collection/Table
const Voterlogin=new mongoose.model("Voter_Login_details",Voterlogin_det);
module.exports=Voterlogin;

const { assert } = require('console');
const express=require('express');
const app=express();
const path=require('path');
const Router=express.Router();
const port=process.env.PORT||3000;
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.json());
app.use(express.urlencoded({extended : false}));
require("./db/connectdb");
const Create_Reg=require("./models/Get_registration_details");
const static_path=path.join(__dirname,"../../frontend/public");
app.use(express.static(static_path));
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"../../frontend/public/home.html"));
});
app.post('/reg_details',async(req,res)=>{
console.log(req.body.title);
try{
const register=new Create_Reg({
FirstName: req.body.user,
LastName: req.body.last,
Email: req.body.email,
PhoneNumber: req.body.phone,
Password: req.body.pass,
ConfirmPassword: req.body.repass
});
const registered=register.save();
res.redirect("/createelection.html")
}
catch(err){
res.status(400).send(err);
}
})
const Create_Election=require("./models/Create_Election_details");
app.get('/createelection',(req,res)=>{
res.sendFile(path.join(__dirname,"../../frontend/public/createelection.html"));
});
app.post('/createelect',async(req,res)=>{
console.log(req.body.title);
try{
const register=new Create_Election({
Title: req.body.title,
StartTime: req.body.start,
EndTime: req.body.end
});
const registered=register.save();
//res.redirect("/overview.ejs")
}
catch(err){
res.status(400).send(err);
}
})
app.listen(port,()=>{
console.log('(app.js)Server is running at port no. '+ port);
});