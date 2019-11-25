const errorHandler = require('../middleware/error');

module.exports = app => {
    app.use(errorHandler);
};
