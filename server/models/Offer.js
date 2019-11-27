const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
    },
    description: {
        type: String,
        minlength: 20,
        maxlength: 2048,
        required: true,
    },
    location: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    tags: {
        type: [String],
        required: false,
    },
    owner: {
        type: String,
        required: true,
    },
    premium: Boolean,
});

module.exports = mongoose.model('Offer', offerSchema);
