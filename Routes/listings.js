const express = require('express');
const Router=express.Router({mergeParams:true});
const listingModels=require('../models/listings.js');
const wrapperAsync=require("../utils/wrapperAsync.js");
const ExpressError=require("../utils/expressError.js");
const {ValidateSchema}=require("../utils/validateListingsSchema.js");
const multer=require('multer');
const cloudinary=require('cloudinary')
const {storageForListingImage}=require('../addListingsCloudinery.js');
const upload=multer({storage:storageForListingImage});



let isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

let checkOwner=async(req,res,next)=>{
    let {id}=req.params;
    let l=await listingModels.findById(id);
    
    if(!l.owner._id.equals(req.user._id)){
        req.flash('error',`You are Not the Owner of The listing`);
        return res.redirect(`/listings/${id}`);
    }
    next();
}
const validateListings=(req,res,next)=>{
    let {error}=ValidateSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }else{
        next();
    }
}
//show Listings
Router.get('/page/:pageNo',wrapperAsync( async (req,res)=>{
    let listingsdata=await listingModels.find();
    let {pageNo}=req.params;
    if(listingsdata.length===0){
        res.render('noContent.ejs');
    }else{
        
        let numberOfPages=Math.ceil(listingsdata.length/12);
        let si;
        if(pageNo==1){
            si=0;
        }else{
            si=((pageNo-1)*10)+(2*(pageNo-1));
        }
        ei=(pageNo*10)+(2*pageNo);
        res.render('listings.ejs',{listingsdata,pageNo,numberOfPages,si,ei});
    }    
}));
// add listings
Router.get('/create',isLoggedIn,(req,res)=>{
    res.render("add.ejs");
});
//add listing to db
let createObject=(req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    let data=req.body;
    data.image={
        url,
        filename,
    };
    next();
}
// add data to db
Router.post('/create',isLoggedIn,upload.single('image'),createObject,validateListings,wrapperAsync(async(req,res)=>{
    let data=req.body;
    const newlisting=new listingModels(data);
    newlisting.owner=req.user._id;
    await newlisting.save();
    req.flash('success',`New Listing is created!`);
    res.redirect('/listings/page/1');
}));
//detail view
Router.get('/:id',wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id).populate("review").populate('owner').populate({
        path: 'review',
        populate: {
            path: 'owner',
        }
    });
    
    
    if(data){

        res.render("detailView.ejs",{data});
    }else{
        req.flash('error','Listing does not exist!');
        res.redirect('/listings/page/1');

    }
}));

// delete listings

Router.delete('/:id',isLoggedIn,checkOwner,wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let listing=await listingModels.findById(id);
    if (listing.image && listing.image.filename) {
        await cloudinary.uploader.destroy(listing.image.filename);
    }
    await listingModels.findByIdAndDelete(id);
    req.flash('success',`Listing is Deleted!`);
    res.redirect('/listings/page/1');
}));

// edit
Router.get('/edit/:id',isLoggedIn,wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id);
    if(data){
        res.render('edit.ejs',{data});
    }else{
        req.flash('error','Listing does not exist!');
        res.redirect('/listings/page/1');
    }
    
}));

let destroyImageFromCloud=async(req,res,next)=>{
    let {id}=req.params;

    if (req.file) {
        let listing = await listingModels.findById(id);
        if (listing.image && listing.image.filename) {
            await cloudinary.uploader.destroy(listing.image.filename);
        }
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={
            url,
            filename
        }
        await listing.save();
    }
    next();
}

// update
Router.post('/edit/:id',isLoggedIn,checkOwner,upload.single('image'),wrapperAsync(destroyImageFromCloud),validateListings,wrapperAsync(async(req,res)=>{
    
    let {id}=req.params;
    let updatedData=req.body;
    

    await listingModels.findByIdAndUpdate(id,updatedData);
    req.flash('success',`Listing successfully updated!`);
    res.redirect(`/listings/${id}`);
}));

module.exports=Router;