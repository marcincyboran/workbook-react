const companiesRouter = require('../routes/companies');
const authRouter = require('../routes/auth');

module.exports = app => {
    app.use('/api/v1/companies', companiesRouter);
    app.use('/api/v1/auth', authRouter);
};
