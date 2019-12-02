const asyncHandler = require('./async');
const jwt = require('jsonwebtoken');
const ResponseError = require('../utilities/errorResponse');
const Account = require('../models/Account');

module.exports.auth = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers['x-auth-token'] && req.headers['x-auth-token'].startsWith('Bearer')) {
        token = req.headers['x-auth-token'].split(' ')[1];
    }

    if (!token) return next(new ResponseError('Not authorize to access this route', 401));

    // Try catch is not required, but give us oportunity to send custom message when fail, not default invalid signature
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE);
        const account = await Account.findById(decodedToken._id).select('role');
        if (!account) return next(new ResponseError('There is no account with given ID', 404));
        console.log(account);
        req.account = account;
        next();
    } catch (err) {
        return next(new ResponseError('[Catch] Not authorize to access this route', 401));
    }
});

module.exports.access = (...roles) => (req, res, next) => {
    if (!roles.includes(req.account.role)) {
        return next(new ResponseError(`Account role ${req.account.role} is not authorize to access this route`, 403));
    }
    next();
};
