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
const Create_Election=require("./models/Create_Election_details");
const det=Create_Election.find().limit(1).sort({$natural:-1});
const Create_Reg=require("./models/Get_registration_details");
const regis=Create_Reg.find().limit(1).sort({$natural:-1});
app.get('/',getelecdetails,getregis_details,renderform);
function getelecdetails(req,res,next){
det.exec(function(err,data){
if(err) next(err);
res.locals.users=data
next();
});
// next();
};
function getregis_details(req,res,next){
regis.exec(function(err,reg){
if(err) next(err);
res.locals.reg_det=reg
next();
});
// next();
};
function renderform(req,res){
res.render('overview')
};
app.listen(port,()=>{
console.log('(server.js)Server is running at port no. '+ port);
});
