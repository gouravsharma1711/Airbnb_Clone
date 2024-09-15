const express=require('express');
const Router=express.Router({mergeParams:true});

//privacy 
Router.get("/privacy",(req,res)=>{
    res.render("privacy.ejs");
});
//terms 
Router.get("/terms",(req,res)=>{
    res.render("terms.ejs");
});

module.exports=Router;