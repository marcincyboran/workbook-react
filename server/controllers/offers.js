const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const crypto = require('crypto');
const path = require('path');
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
module.exports.getOffer = asyncHandler(async (req, res, next) => {
    if (!req.params.id) return next(new ErrorResponse('Offer ID required', 400));

    const offer = await Offer.findById(req.params.id).populate('owner');

    if (!offer) return next(new ErrorResponse('There is no offer with given ID', 404));

    res.status(200).json({
        success: true,
        payload: offer,
    });
});

// @desc    Create offer
// @route   POST /api/v1/offers
// @acces   ADMIN / USERS
module.exports.createOffer = asyncHandler(async (req, res, next) => {
    let imgs = [];

    if (req.account.role !== 'admin') {
        const offersCounter = await Offer.find({ owner: req.account._id }).countDocuments();
        if (!req.account.premium && offersCounter >= process.env.MAX_OFFERS_LIMIT) {
            return next(new ErrorResponse('Reached maxiumum number of offerts for free users', 402));
        }
    }

    if (req.files) {
        if (Array.isArray(req.files.imgs)) imgs = req.files.imgs;
        else imgs.push(req.files.imgs);

        imgs = imgs.map((img, i) => {
            if (i >= process.env.MAX_OFFER_IMGS) return;

            if (img.size >= process.env.MAX_FILE_SIZE) {
                return next(new ErrorResponse(`${img.name} is too big`, 400));
            }

            if (!img.mimetype.startsWith('image')) {
                return next(new ErrorResponse('Invalid mimetype, only images allowed', 400));
            }

            const imgName = `${crypto.randomBytes(8).toString('hex')}${path.parse(img.name).ext}`;
            const imgAlt = `${path
                .parse(img.name)
                .name.split(/(?:-|_)/g)
                .join(' ')}`;

            img.mv(`${process.env.FILES_DIR}/imgs/${imgName}`, async err => {
                if (err) {
                    console.error(err);
                    return next(new ErrorResponse('Image transfer failed', 500));
                }
            });

            return {
                src: `${process.env.DOMAIN}/uploads/imgs/${imgName}`,
                alt: imgAlt.charAt(0).toUpperCase() + imgAlt.substring(1),
            };
        });
    }

    const offer = await Offer.create({
        ..._.omit(req.body, 'imgs'),
        premium: req.account.premium,
        owner: req.account._id,
        imgs,
    });

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
module.exports.deleteOffer = asyncHandler(async (req, res, next) => {
    const offer = await Offer.findById(req.params.id);

    if (!offer) return next(new ErrorResponse('There is no offer with given ID', 404));

    const isNotOwner = offer.owner.toString() !== req.account._id.toString();
    if (req.account.role !== 'admin' && isNotOwner)
        return next(new ErrorResponse('You can only delete your own offers', 403));

    await offer.remove();

    res.status(200).json({ success: true, payload: {} });
});
