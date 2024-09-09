const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const listingModels=require('./models/listings.js');
const { log, Console } = require('console');
const wrapperAsync=require("./utils/wrapperAsync.js");
const ExpressError=require("./utils/expressError.js");
const {ValidateSchema}=require("./utils/validateListingsSchema.js");
const {ValidateReviewSchema}=require("./utils/ValidateReviewSchema.js");
const review=require("./models/review.js");



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);

main().then(()=>{
    console.log('Db successfully Connected');
}).catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AirbnbDataBase');
}


const validateListings=(req,res,next)=>{
    let {error}=ValidateSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }else{
        next();
    }
}
const validateReviewSchema=(req,res,next)=>{
    let {error}=ValidateReviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }else{
        next();
    }
}


// show all listings
app.get('/listings/page/:pageNo',wrapperAsync( async (req,res)=>{
    let listingsdata=await listingModels.find();
    let {pageNo}=req.params;
    if(listingsdata.length===0){
        res.render('noContent.ejs');
    }else{
        
        let numberOfPages=Math.ceil(listingsdata.length/12);
        console.log(numberOfPages);
        
        
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
app.get('/listings/create',(req,res)=>{
    res.render("add.ejs");
});
//add listing to db
app.post('/listings/create',validateListings,wrapperAsync(async(req,res)=>{
    let data=req.body;
    const newlisting=new listingModels(data);
    await newlisting.save();
    res.redirect('/listings/page/1');
}));
//detail view
app.get('/listings/:id',wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id).populate("review");
    res.render("detailView.ejs",{data});
}));

// delete listings

app.delete('/listings/:id',wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    await listingModels.findByIdAndDelete(id);
    res.redirect('/listings/page/1');
}));

// edit
app.get('/listings/edit/:id',wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id);
    res.render('edit.ejs',{data});
}));

// update
app.post('/listings/edit/:id',validateListings,wrapperAsync(async(req,res)=>{
    
    let {id}=req.params;
    let updatedData=req.body;
    await listingModels.findByIdAndUpdate(id,updatedData);
    res.redirect(`/listings/${id}`);
}));
//privacy 
app.get("/wanderlust/privacy",(req,res)=>{
    res.render("privacy.ejs");
});
//terms 
app.get("/wanderlust/terms",(req,res)=>{
    res.render("terms.ejs");
});
// home
app.get('/home',(req,res)=>{
    res.render("home.ejs")
})
// search by city Name
app.get('/listing/:cityName',wrapperAsync(async(req,res)=>{
    let {cityName}=req.params
    function capitalizeFirstLetter(str) {
        if (str.length === 0) return str; // Return the empty string if input is empty
    
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    cityName=capitalizeFirstLetter(cityName);
    let listingsdata=await listingModels.find({location:cityName});
    if(listingsdata.length===0){
        res.render('noContent.ejs');
    }else{
    res.render('searchResult.ejs',{cityName,listingsdata});
    }
}));

// add Reviews
app.post("/listings/:id/review",validateReviewSchema,wrapperAsync(async(req,res)=>{
    let {id}=req.params;
    let newReview=new review(req.body);
    await newReview.save();
    let myCurrentListing=await listingModels.findById(id);
    console.log(myCurrentListing);
    myCurrentListing.review.push(newReview);
    await myCurrentListing.save();
    res.redirect(`/listings/${id}`);
}));

// delete review
app.delete('/listings/:id/review/:reviewId',wrapperAsync(async(req,res)=>{

    let {id,reviewId}=req.params;
    await listingModels.findByIdAndUpdate(id,{$pull:{review:reviewId}});
    await review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

app.all('*', (req, res,next) => {
    next(new ExpressError(404,"Page Not Found"));
});

app.use((err,req,res,next)=>{
    let {status=500,message="Something Went Wrong"}=err;
    if(status===404){
        res.status(404).render('pageNotFound.ejs');
    }else{
        res.status(status).send(message);
    }
});

const port=3000;
app.listen(port,()=>{
    console.log("Server Starts successfully");
});
