let joi=require('joi');


module.exports.validateUserSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phoneNumber: joi.string().required(),
    dob: joi.date().required(),
    password:joi.string().required(),
    profilePic:joi.object({
        url:joi.string(),
        filename:joi.string(),
    }).required()
});

