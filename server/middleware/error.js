const ResponseError = require('../utilities/errorResponse');

module.exports = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log(err.stack.red);

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        error = new ResponseError(`[Error Handler] Resource not found with id of ${err.value}.`, 404);
        console.log('Działa');
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        error = new ResponseError(`[Error Handler] Duplicate filed value entered`, 400);
    }

    // Alternative to JOI/Hapi
    if (err.name === 'ValidationError') {
        const errorsMessagesArr = Object.values(err.errors).map(error => error.message);
        error = new ResponseError(`[Error Handler] ${errorsMessagesArr}`, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || '[Error Handler] Server Error',
    });
};
