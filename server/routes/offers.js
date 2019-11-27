const express = require('express');
const router = express.Router();
const { getOffers, getOffer, createOffer, updateOffer, deleteOffer } = require('../controllers/offers');

router
    .route('/')
    .get(getOffers)
    .post(createOffer);

router
    .route('/:id')
    .get(getOffer)
    .put(updateOffer)
    .delete(deleteOffer);

module.exports = router;
