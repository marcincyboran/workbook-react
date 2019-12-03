const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const accountSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Pleasse add a firstName.'],
    },
    lastName: {
        type: String,
        required: [true, 'Pleasse add a lastName.'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email.'],
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please use a valid email adress.',
        ],
    },
    role: {
        type: String,
        enum: ['user', 'company'],
        required: [true, 'Please set an account role.'],
    },
    password: {
        type: String,
        required: [true, 'Please add a password.'],
        minlength: 8,
        select: false,
    },
    address: {
        type: String,
        required: [true, 'Please add an address'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastModified: Date,
    location: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },
    facebook: String,
    linkedin: String,
    phone: String,
    resetToken: String,
    resetTokenExpire: String,
    offertsCounter: Number,
    premium: {
        type: Boolean,
        default: false,
    },
});

accountSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.lastModified = Date.now();
    next();
});

// accountSchema.pre('save', async function (next) {
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//         type: 'Point',
//         coordinates: [loc[0].longitude, loc[0].latitude],
//         formattedAddress: loc[0].formattedAddress,
//         street: loc[0].streetName,
//         city: loc[0].city,
//         state: loc[0].stateCode,
//         zipcode: loc[0].zipcode,
//         country: loc[0].country || loc[0].countryCode
//     };
//     next();
// });

accountSchema.methods.genJwt = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

accountSchema.methods.comparePasswords = async function(enteredPass) {
    return await bcrypt.compare(enteredPass, this.password);
};

module.exports = mongoose.model('Account', accountSchema);
