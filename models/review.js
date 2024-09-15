const { required, date } = require('joi');
const mongoose=require('mongoose');
const user=require('./user.js');

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
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
    }
})
let review=mongoose.model('review',reviews);
module.exports = review;
