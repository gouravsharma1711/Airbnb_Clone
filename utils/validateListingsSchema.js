let joi=require('joi');
const listings = require('../models/listings');
module.exports.ValidateSchema =joi.object({
        title:joi.string().required(),
        description:joi.string().min(200).required(),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.number().min(0).required(),
        image:joi.string().allow("",null)
});

