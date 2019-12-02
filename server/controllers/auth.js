const ErrorResponse = require('../utilities/errorResponse');
const asyncHandler = require('../middleware/async');
const Account = require('../models/Account');
const _ = require('lodash/object');

// @desc    Create new account
// @route   POST /api/v1/auth/register
// @acces   PUBLIC
module.exports.register = asyncHandler(async (req, res, next) => {
    const createdAcc = await Account.create(req.body);
    sendResponse(createdAcc, res, 201);
});

// @desc    Login
// @route   POST /api/v1/auth/login
// @acces   PUBLIC
module.exports.login = asyncHandler(async (req, res, next) => {
    if (!req.body.email || !req.body.password) return next(new ErrorResponse('Please add email and password.', 400));

    const account = await Account.findOne({ email: req.body.email }).select('+password');

    if (!account) return next(new ErrorResponse('Inavlid credentials.', 401));

    // Compare credentials
    const isPassSame = await account.comparePasswords(req.body.password);
    if (!isPassSame) return next(new ErrorResponse('Invalid credentials', 401));

    sendResponse(account, res, 200);
});

// @desc    Update account details
// @route   PUT /api/v1/auth/updatedetails
// @acces   ADMIN / OWNER
module.exports.updateDetails = asyncHandler(async (req, res, next) => {
    const updateObj = {
        firstName: req.body.firstName ? req.body.firstName : null,
        lastName: req.body.lastName ? req.body.lastName : null,
        email: req.body.email ? req.body.email : null,
        phone: req.body.phone ? req.body.phone : null,
        address: req.body.address ? req.body.address : null,
        facebook: req.body.facebook ? req.body.facebook : null,
        linkedin: req.body.linkedin ? req.body.linkedin : null,
    };

    const account = await Account.findByIdAndUpdate(req.account._id, updateObj, {
        new: true,
        runValidators: true,
    });

    sendResponse(account, res, 200);
});

// @desc    Get ME
// @route   GET /api/v1/auth/me
// @acces   PRIVATE
module.exports.getMe = asyncHandler(async (req, res, next) => {
    console.log('asdas');
    const account = await Account.findById(req.account._id);

    if (!account) return next(new ErrorResponse('Ther is no account with given ID', 404));

    sendResponse(account, res, 200);
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

const sendResponse = (account, res, status) => {
    const token = account.genJwt();
    console.log(token);
    res.status(status).json({
        success: true,
        payload: {
            token,
            account: _.pick(account, [
                '_id',
                'firstName',
                'lastName',
                'email',
                'phone',
                'address',
                'facebook',
                'linkedin',
                'role',
            ]),
        },
    });
};
