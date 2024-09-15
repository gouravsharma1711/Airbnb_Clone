const express=require('express');
const router=express.Router({mergeParams:true});
const {validateUserSchema}=require('../utils/userValidation.js');
const wrapperAsync=require('../utils/wrapperAsync.js');
const UserModels=require('../models/user.js');
const passport=require('passport');
const ExpressError=require('../utils/expressError.js');

const multer=require('multer');
const cloudinary=require('cloudinary')
const {storageForProilePic}=require('../addListingsCloudinery.js');
const upload=multer({storage:storageForProilePic});

const saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.reDirectUrl=req.session.redirectUrl;
    }
    next();
}

const validateListings=(req,res,next)=>{
    let {error}=validateUserSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }else{
        next();
    }
}


router.get('/signup',(req,res)=>{
    res.render('../views/user/signup.ejs');
});

let createObject = (req, res, next) => {
    console.log(req.file);
    
    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        let data = req.body;
        data.profilePic = { url, filename };
    }
    next();
};

router.post('/signup',upload.single('profilePic'),createObject,validateListings,async(req,res)=>{
    try{
        let a=new UserModels(req.body);
        let newData=await UserModels.register(a , req.body.password);
        req.logIn(newData,(err)=>{
            if(err){
                return next(err);
            }
            req.flash('success',"New User Created Successfully ");
            res.redirect('/home');
        })
    
    }catch(e){
        if (e.code === 11000) {
            if (e.keyPattern.email) {
                req.flash('error', 'A user with the given Email is already registered');
            } else if (e.keyPattern.phoneNumber) {
                req.flash('error', 'A user with the given Phone number is already registered');
            }
        } else {
            req.flash('error', e.message);
        }
        res.redirect('/users/signup');

    }
}); 

router.get('/login',(req,res)=>{
    res.render('../views/user/login.ejs');
});

router.post('/login',saveRedirectUrl,passport.authenticate('local',{failureRedirect:"/users/login",failureFlash:true}),async(req,res)=>{
    req.flash('success','Welcome to Airbnb :) ');
    let redirect=(res.locals.reDirectUrl)?res.locals.reDirectUrl:'/home';
    res.redirect(redirect);
});

router.get('/logout', (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You are logged out!');
        res.redirect('/home');
    });
});

module.exports=router; 