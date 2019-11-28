const authRouter = require('../routes/auth');
const offersRouter = require('../routes/offers');
const companiesRouter = require('../routes/companies');

module.exports = app => {
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/offers', offersRouter);
    app.use('/api/v1/companies', companiesRouter);
};
