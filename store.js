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
const candidate_details=require("./models/Add_Candidate_details");

const static_path=path.join(__dirname,"../../frontend/public");
app.use(express.static(static_path));

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"../../frontend/public/addc.html"
));
});

app.post('/addcandidate',async(req,res)=>{
try{
const register=new candidate_details({
Name: req.body.name,
Email: req.body.email,
Description: req.body.message
});
const registered=register.save();
}
catch(err){
res.status(400).send(err);
}
})
app.listen(port,()=>{
console.log('(app2.js)Server is running at port no. '+ port);
});

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
const voter_det=require("./models/voter_details");
const static_path=path.join(__dirname,"../../frontend/public");
app.use(express.static(static_path));
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"../../frontend/public/addv.html"));
});
app.post('/addvoter',async(req,res)=>{
try{
const register=new voter_det({
Name: req.body.name,
Email: req.body.email,
VoterID: req.body.voterid,
VoterKey: req.body.voterkey
});
const registered=register.save();
}
catch(err){
res.status(400).send(err);
}
})
app.listen(port,()=>{
console.log('(app2.js)Server is running at port no. '+ port);
});

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
const Voterlogin=require("./models/Voter_login_details");
const static_path=path.join(__dirname,"../../frontend/public");
app.use(express.static(static_path));
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"../../frontend/public/votingportal.html"
));
});
app.post('/voterlogin',async(req,res)=>{
console.log(req.body.title);
try{
const register=new Voterlogin({
Name: req.body.user,
VoterID: req.body.voterid,
VoterKey: req.body.key,
});
const registered=register.save();
// res.redirect("/createelection.html")
}
catch(err){
res.status(400).send(err);
}
})
app.listen(port,()=>{
console.log('(app.js)Server is running at port no. '+ port);
});


const { assert } = require('console');
const express=require('express');
const app=express();
const port=process.env.PORT || 4000;
const path=require('path');
app.set('view engine','ejs');
const static_path=path.join(__dirname,"../../frontend/public");
app.use(express.static(static_path));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
require("./db/connectdb");
const candidate_details=require("./models/Add_Candidate_details");
const cnt=candidate_details.find({Name:{$exists:true}}).count();
var numcan=0;
cnt.exec(function(err,d)
{
if(err) throw(err);
numcan=d;
});
console.log(numcan);
const det=candidate_details.find();
app.get('/',getcandidatedetails,renderform);
function getcandidatedetails(req,res,next){
det.exec(function(err,data){
if(err) next(err);
res.locals.users=data
next();
});
// next();
};
function renderform(req,res){
res.render('votehere')
};
app.listen(port,()=>{
console.log('(server.js)Server is running at port no. '+ port);
});

const { assert } = require('console');
const express=require('express');
const app=express();
const port=process.env.PORT || 4000;
const path=require('path');
app.set('view engine','ejs');
const static_path=path.join(__dirname,"../../frontend/public");
app.use(express.static(static_path));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
require("./db/connectdb");
const candidate_details=require("./models/Add_Candidate_details");
const cnt=candidate_details.find({Name:{$exists:true}}).count();
var numcan=0;
cnt.exec(function(err,d)
{
if(err) throw(err);
numcan=d;
});
console.log(numcan);
const det=candidate_details.find();
app.get('/',getcandidatedetails,renderform);
function getcandidatedetails(req,res,next){
det.exec(function(err,data){
if(err) next(err);
res.locals.users=data
next();
});
// next();
};
function renderform(req,res){
res.render('votehere')
};
app.listen(port,()=>{
console.log('(server.js)Server is running at port no. '+ port);
});
