const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const Account = require('../models/Account');
const Offer = require('../models/Offer');
const _ = require('lodash/object');

// @desc    Get offers
// @route   GET /api/v1/offers
// @acces   PUBLIC
module.exports.getOffers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.queryChain);
});

// @desc    Get offer details
// @route   GET /api/v1/offers/:id
// @acces   PUBLIC
module.exports.getOffer = asyncHandler(async (req, res, next) => {});

// @desc    Create offer
// @route   POST /api/v1/offers
// @acces   ADMIN / USERS
module.exports.createOffer = asyncHandler(async (req, res, next) => {
    if (req.account.role !== 'admin') {
        const offersCounter = await Offer.find({ owner: req.account._id }).countDocuments();
        if (!req.account.premium && offersCounter >= 3)
            return next(new ErrorResponse('Reached maxiumum number of offerts for free users', 402));
    }

    const offer = await Offer.create({
        ...req.body,
        premium: req.account.premium,
        owner: req.account._id,
    });

    console.log(offer);

    res.status(201).json({
        success: true,
        payload: offer,
    });
});

// @desc    Update offer details
// @route   PUT /api/v1/offers/:id
// @acces   ADMIN / OWNER
module.exports.updateOffer = asyncHandler(async (req, res, next) => {});

// @desc    Delete offer
// @route   DELETE /api/v1/offers/:id
// @acces   ADMIN / OWNER
module.exports.deleteOffer = asyncHandler(async (req, res, next) => {});
