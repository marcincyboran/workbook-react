const express = require('express');
const router = express.Router();
const queryChain = require('../middleware/queryChain');
const Company = require('../models/Company');
const { auth, access } = require('../middleware/security');
const { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } = require('../controllers/companies');

router
    .route('/')
    .get(queryChain(Company), getCompanies)
    .post(auth, access('company', 'admin'), createCompany);

router
    .route('/:id')
    .get(getCompany)
    .put(auth, access('company', 'admin'), updateCompany)
    .delete(auth, access('company', 'admin'), deleteCompany);

module.exports = router;
