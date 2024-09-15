let joi=require('joi');
const review = require('../models/review.js');
let mongoose=require('mongoose');

module.exports.ValidateReviewSchema =joi.object({
        rating:joi.number().required(),
        comment:joi.string().required(),
        owner: joi.string().custom((value, helpers) => {
                if (!mongoose.Types.ObjectId.isValid(value)) {
                    return helpers.error('any.invalid');
                }
                return value;
        }, 'ObjectId Validation')  ,
});