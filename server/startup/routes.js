const companiesRouter = require('../routes/companies');
const authRouter = require('../routes/auth');
const offersRouter = require('../routes/offers');

module.exports = app => {
    app.use('/api/v1/companies', companiesRouter);
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/offers', offersRouter);
};
