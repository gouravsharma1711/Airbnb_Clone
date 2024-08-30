const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const listingModels=require('./models/listings.js');
const { log, Console } = require('console');

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

const port=3000;
app.listen(port,()=>{
    console.log("Server Starts successfully");
});

// show all listings
app.get('/listings',async (req,res)=>{
    let listingsdata=await listingModels.find();
    res.render('listings.ejs',{listingsdata});
    
});
//detail view
app.get('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id);
    res.render("detailView.ejs",{data});
});

// delete listings

app.delete('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    await listingModels.findByIdAndDelete(id);
    res.redirect('/listings');
});

// edit
app.get('/listing/edit/:id',async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id);
    res.render('edit.ejs');
});

