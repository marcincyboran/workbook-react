const mongoose = require('mongoose');
const geocoder = require('../utilities/geocoder');

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [5, 'Minimum 5 characters.'],
        maxlength: [50, 'Maximum 50 characters.'],
        required: [true, 'Please add a title.'],
    },
    shortText: {
        type: String,
        minlength: [5, 'Minimum 5 characters.'],
        maxlength: [250, 'Maximum 250 characters.'],
        required: [true, 'Please add a title.'],
    },
    description: {
        type: String,
        minlength: [20, 'Minimum 20 characters.'],
        maxlength: [2048, 'Maximum 2048 characters.'],
        required: [true, 'Please add a description.'],
    },
    address: {
        type: String,
        lowercase: true,
        minlength: [5, 'Minimum 5 characters.'],
        maxlength: [50, 'Maximum 50 characters.'],
        required: [true, 'Please add a location.'],
    },
    location: {
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
    tags: {
        type: [String],
        lowercase: true,
        required: false,
    },
    slug: String,
    photos: [
        {
            src: String,
            alt: String,
        },
    ],
    budget: Number,
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Account',
        required: [true, 'Owner is required to create new offer.'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    premium: {
        type: Boolean,
        default: false,
    },
});

offerSchema.pre('save', function(next) {
    this.slug = this.title
        .toLowerCase()
        .split(' ')
        .join('-');
    next();
});

offerSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipcode,
        country: loc[0].country || loc[0].countryCode,
    };
    next();
});

offerSchema.pre('remove', async function(next) {
    await this.model('Review').deleteMany({ for: this._id });
    next();
});

module.exports = mongoose.model('Offer', offerSchema);
