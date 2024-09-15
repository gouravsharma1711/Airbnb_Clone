const mongoose=require('mongoose');
const review=require("./review.js")
const user=require("./user.js")
const { ref } = require('joi');
let Schema=mongoose.Schema;
let listingSchema=new Schema({
        title: {
          type: String,
          required: true,
        },
        description: {
            type:String,
            required:true,
        },
        image: {
            url:String,
            filename:String,
          },
        price: {
            type:Number,
            required:true,
        },
        location: {
            type:String,
            required:true,
        },
        country: {
            type:String,
            required:true,
        },
        review:[
          {
            type:Schema.Types.ObjectId,
            ref:"review"
          }
        ],
        owner:{
          type:Schema.Types.ObjectId,
          ref:user,
        }
});

listingSchema.post('findOneAndDelete',async(listing)=>{
  if(listing){
    await review.deleteMany({_id:{$in:listing.review}});
  }
});

let listings=mongoose.model('listing',listingSchema);

module.exports=listings;