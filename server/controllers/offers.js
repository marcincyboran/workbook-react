const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const Account = require('../models/Account');
const Offer = require('../models/Offer');
const _ = require('lodash/object');

// @desc    Get offers
// @route   GET /api/v1/offers
// @acces   PUBLIC
module.exports.getOffers = asyncHandler(async (req, res, next) => {
    const offers = await Offer.find();

    res.status(200).json({
        success: true,
        payload: offers,
    });
});

// @desc    Get offer details
// @route   GET /api/v1/offers/:id
// @acces   PUBLIC
module.exports.getOffer = asyncHandler(async (req, res, next) => {});

// @desc    Create offer
// @route   POST /api/v1/offers
// @acces   ADMIN / USERS / COMPANIES
module.exports.createOffer = asyncHandler(async (req, res, next) => {});

// @desc    Update offer details
// @route   PUT /api/v1/offers/:id
// @acces   ADMIN / OWNER
module.exports.updateOffer = asyncHandler(async (req, res, next) => {});

// @desc    Delete offer
// @route   DELETE /api/v1/offers/:id
// @acces   ADMIN / OWNER
module.exports.deleteOffer = asyncHandler(async (req, res, next) => {});
