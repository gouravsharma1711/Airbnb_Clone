let joi=require('joi');
let mongoose=require('mongoose');
const listings = require('../models/listings');
module.exports.ValidateSchema =joi.object({
        title:joi.string().required(),
        description:joi.string().min(200).required(),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.number().min(0).required(),
        image:joi.object({
                url:joi.string().required(),
                filename:joi.string().required(),
        }),
        owner: joi.string().custom((value, helpers) => {
                if (!mongoose.Types.ObjectId.isValid(value)) {
                    return helpers.error('any.invalid');
                }
                return value;
            }, 'ObjectId Validation')
});


