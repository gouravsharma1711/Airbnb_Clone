let joi=require('joi');
const review = require('../models/review.js');

module.exports.ValidateReviewSchema =joi.object({
        rating:joi.number().required(),
        comment:joi.string().required(),     
});