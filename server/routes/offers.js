const express = require('express');
const router = express.Router();
const { getOffers, getOffer, createOffer, updateOffer, deleteOffer } = require('../controllers/offers');
const queryChain = require('../middleware/queryChain');
const Offer = require('../models/Offer');
const { auth, access } = require('../middleware/security');

router
    .route('/')
    .get(queryChain(Offer), getOffers)
    .post(auth, access('user', 'admin'), createOffer);

router
    .route('/:id')
    .get(getOffer)
    .put(updateOffer)
    .delete(deleteOffer);

module.exports = router;
