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


// show all listings
app.get('/listings',async (req,res)=>{
    let listingsdata=await listingModels.find();
    if(listingsdata.length===0){
        res.render('noContent.ejs');
    }else{
    res.render('listings.ejs',{listingsdata});
    }    
});
// add listings
app.get('/listings/create',(req,res)=>{
    res.render("add.ejs");
});
//add listing to db
app.post('/listings/create',(req,res)=>{
    let data=req.body;
    const newlisting=new listingModels(data);
    newlisting.save()
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err));
    
    res.redirect('/listings');
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
app.get('/listings/edit/:id',async(req,res)=>{
    let {id}=req.params;
    let data=await listingModels.findById(id);
    res.render('edit.ejs',{data});
});

// update
app.post('/listings/edit/:id',async(req,res)=>{
    let {id}=req.params;
    let updatedData=req.body;
    await listingModels.findByIdAndUpdate(id,updatedData);
    res.redirect('/listings');
});
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
app.get('/listing/:cityName',async(req,res)=>{
    let {cityName}=req.params
    // first letter capital
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
})

app.use('*', (req, res) => {
    res.render('pageNotFound.ejs');
});


const port=3000;
app.listen(port,()=>{
    console.log("Server Starts successfully");
});