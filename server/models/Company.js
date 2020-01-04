const mongoose = require('mongoose');
const geocoder = require('../utilities/geocoder');
const Review = require('./Review');

// _id: string;
// name: string;
// description: string;
// createdAt: CreatedAt;
// address: string;
// location: LocationType;
// tags: string[];
// likes: number;
// votes: number;
// logo?: string;
// imgs: ImageType[];
// services: string[];
// reviews: ReviewType[];
// site?: string;

const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: [3, 'Minimum 3 characters.'],
            maxlength: [30, 'Maximum 30 characters.'],
            required: [true, 'Please add a name.'],
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
            required: [true, 'Please add a address.'],
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
        logo: String,
        imgs: {
            type: [
                {
                    src: String,
                    alt: String,
                },
            ],
            default: [],
        },
        services: [String],
        owner: {
            type: mongoose.Schema.ObjectId,
            ref: 'Account',
            required: [true, 'Owner is required to create new company.'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        premium: {
            type: Boolean,
            default: false,
        },
        points: {
            type: Number,
            default: 0,
        },
        votes: {
            type: Number,
            default: 0,
        },
        site: String,
    },
    {
        toJSON: { virtuals: true },
    }
);

companySchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'owner',
});

companySchema.pre('save', function(next) {
    this.slug = this.name
        .toLowerCase()
        .split(' ')
        .join('-');
    next();
});

companySchema.pre('save', async function(next) {
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

// companySchema.pre('remove', async function(next) {
//     await this.model('Review').deleteMany({ for: this._id });
//     next();
// });

module.exports = mongoose.model('Company', companySchema);
