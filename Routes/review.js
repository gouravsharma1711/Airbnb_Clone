const express=require('express');
const Router=express.Router({mergeParams:true});
const listingModels=require('../models/listings.js');
const wrapperAsync=require("../utils/wrapperAsync.js");
const ExpressError=require("../utils/expressError.js");
const {ValidateReviewSchema}=require("../utils/ValidateReviewSchema.js");
const review=require("../models/review.js");


let isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

let checkOwner=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    
    let r=await review.findById(reviewId).populate('owner');

    if(!r.owner._id.equals(req.user._id)){
        req.flash('error',`You are Not the Owner of The listing`);
        return res.redirect(`/listings/${id}`);
    }
    next();
}

const validateReviewSchema=(req,res,next)=>{
    let {error}=ValidateReviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }else{
        next();
    }
}

// add Reviews
Router.post("/",isLoggedIn,validateReviewSchema,wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let newReview=new review(req.body);
    newReview.owner=req.user._id;
    await newReview.save();
    
    let myCurrentListing=await listingModels.findById(id);
    myCurrentListing.review.push(newReview);
    
    await myCurrentListing.save();
    req.flash('success',`New Review is Added!`);

    res.redirect(`/listings/${id}`);
}));

// delete review
Router.delete('/:reviewId',isLoggedIn,checkOwner,wrapperAsync(async(req,res)=>{

    let {id,reviewId}=req.params;
    await listingModels.findByIdAndUpdate(id,{$pull:{review:reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash('success',`Review is Deleted!`);

    res.redirect(`/listings/${id}`);
}));

module.exports=Router;