const ErrorResponse = require('../utilities/errorResponse');
const asyncHandler = require('../middleware/async');
const Account = require('../models/Account');
const _ = require('lodash/object');

// @desc    Create new account
// @route   POST /api/v1/auth/register
// @acces   PUBLIC
module.exports.register = asyncHandler(async (req, res, next) => {
    const createdAcc = await Account.create(req.body);
    sendToken(createdAcc, res, 201);
});

// @desc    Login
// @route   POST /api/v1/auth/login
// @acces   PUBLIC
module.exports.login = asyncHandler(async (req, res, next) => {
    // Check for data
    if (!req.body.email || !req.body.password) return next(new ErrorResponse('Please add email and password.', 400));
    // Check for acc
    const account = await Account.findOne({ email: req.body.email }).select('+password');

    // Validate if acc exist
    if (!account) return next(new ErrorResponse('Inavlid credentials.', 401));

    // Compare credentials
    const isPassSame = await account.comparePasswords(req.body.password);
    if (!isPassSame) return next(new ErrorResponse('Invalid credentials', 401));

    sendToken(account, res, 200);
});

// @desc    Get all accounts
// @route   POST /api/v1/auth/register
// @acces   ADMIN
module.exports.getAllAccounts = asyncHandler(async (req, res, next) => {
    const accounts = await Account.find();
    res.status(200).json({
        success: true,
        payload: accounts,
    });
});

const sendToken = (account, res, status) => {
    const token = account.genJwt();
    res.status(status).json({
        success: true,
        payload: {
            token,
            account: _.pick(account, ['email', 'firstName', 'role', 'premium']),
        },
    });
};
