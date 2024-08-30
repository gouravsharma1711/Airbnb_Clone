const mongoose=require('mongoose');
main().then(()=>{
    console.log('Db successfully Connected');
}).catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AirbnbDataBase');
}

const mydata=require("./data.js");
let listingModule=require("../models/listings.js");

async function inertData(){
    await listingModule.deleteMany({});
    await listingModule.insertMany(mydata.data);
    console.log("Data is inserted successfully :)");
}
inertData();
