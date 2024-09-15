if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const listingModels=require('./models/listings.js');
const ExpressError=require("./utils/expressError.js");
const wrapperAsync=require("./utils/wrapperAsync.js");
const listings=require('./Routes/listings.js');
const reviews=require('./Routes/review.js');
const terms=require('./Routes/privacyAndTerms.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash=require('connect-flash');
const passport=require('passport');
const passportLocal=require('passport-local');
const userRouter=require('./Routes/userRouter.js');
const user=require('./models/user.js')
const multer=require('multer');

const {storage}=require('./addListingsCloudinery.js');
const upload=multer(storage);

const store=MongoStore.create({
    mongoUrl:process.env.mongo_Atlas_Link,
    crypto:{
        secret:process.env.my_Secret,
    },
    touchAfter:24*3600,
});
store.on('error',()=>{
    console.log("Error in session Store ",err );
    
});

app.use(session({
    store,
    secret: process.env.my_Secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currUser = req.user;
    
    next();
});





app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);

main().then(()=>{
    console.log('Db successfully Connected');
}).catch((err)=>console.log(err));

async function main() {
    await mongoose.connect(process.env.mongo_Atlas_Link);
}

console.log();

//listings
app.use('/listings',listings);

// Reviews
app.use('/listings/:id/review',reviews);

//Users
app.use('/users', userRouter);

//Privacy and terms
app.use('/wanderlust',terms);
// home
app.get('/home',(req,res)=>{
    res.render("home.ejs")
})
// search by city Name
app.get('/listing/:cityName',wrapperAsync(async(req,res)=>{
    let {cityName}=req.params
    function capitalizeFirstLetter(str) {
        if (str.length === 0) return str; 
    
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
