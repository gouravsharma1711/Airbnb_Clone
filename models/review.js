const { required, date } = require('joi');
const mongoose=require('mongoose');
let reviews =new mongoose.Schema({
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    comment:{
        type:String,
        required:true,
    },
    currentDate: {
        type: Date,
        default: Date.now
    }
})
let review=mongoose.model('review',reviews);
module.exports = review;
