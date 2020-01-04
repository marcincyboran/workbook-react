const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const Account = require('../models/Account');
const Company = require('../models/Company');
const _ = require('lodash/object');

// @desc    Get companies
// @route   GET /api/v1/companies
// @acces   PUBLIC
module.exports.getCompanies = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.queryChain);
});

// @desc    Get single company
// @route   GET /api/v1/companies/:id
// @acces   PUBLIC
module.exports.getCompany = asyncHandler(async (req, res, next) => {
    if (!req.params.id) return next(new ErrorResponse('Company ID required', 400));

    const company = await Company.findById(req.params.id).populate({
        path: 'reviews',
        options: {
            limit: 3,
            sort: { createdAt: -1 },
        },
    });

    if (!company) return next(new ErrorResponse('There is no company with given ID', 404));

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
