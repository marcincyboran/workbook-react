const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const Account = require('../models/Account');
const _ = require('lodash/object');

// @desc    Get companies
// @route   GET /api/v1/companies
// @acces   PUBLIC
module.exports.getCompanies = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        payload: fakeCompanies,
    });
});

// @desc    Get single company
// @route   GET /api/v1/companies/:id
// @acces   PUBLIC
module.exports.getCompany = asyncHandler(async (req, res, next) => {
    console.log(req.params.id);
    const company = fakeCompanies.find(el => el._id == req.params.id);
    res.status(200).json({
        success: true,
        payload: company,
    });
});

// @desc    Create new company
// @route   POST /api/v1/companies
// @acces   PUBLIC
module.exports.createCompany = asyncHandler(async (req, res, next) => {});

// @desc    Update company info
// @route   PUT /api/v1/companies/:id
// @acces   ADMIN / OWNER
module.exports.updateCompany = asyncHandler(async (req, res, next) => {});

// @desc    Delete company
// @route   DELETE /api/v1/companies/:id
// @acces   ADMIN / OWNER
module.exports.deleteCompany = asyncHandler(async (req, res, next) => {});

// @desc    Delete many companies
// @route   DELETE /api/v1/companies/
// @acces   ADMIN / OWNER
// module.exports.deleteCompanies = asyncHandler(async (req, res, next) => {});
