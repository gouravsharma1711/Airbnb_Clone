const { required, types } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique:true,
    },
    dob: {
        type: Date,
        required: true,
    },
    profilePic: {
        url:String,
        filename:String,
    }
});

// Use email as the field for username
userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });

let user = mongoose.model('User', userSchema);
module.exports = user;
