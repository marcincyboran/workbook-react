const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Minimum 3 characters.'],
        maxlength: [50, 'Minimum 50 characters.'],
        required: [true, 'Please add a name.'],
    },
    text: {
        type: String,
        minlength: [10, 'Minimum 10 characters.'],
        maxlength: [500, 'Minimum 500 characters.'],
        required: [true, 'Please add a review text.'],
    },
    rating: {
        type: Number,
        min: [1, 'Rating value must be in the range 1 - 5'],
        max: [5, 'Rating value must be in the range 1 - 5'],
        required: [true, 'Rating is required'],
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Account',
        required: [true, 'Owner is required to create new review.'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Review', reviewSchema);
