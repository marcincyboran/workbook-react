const companiesRouter = require('../routes/companies')

module.exports = app => {
    app.use('api/v1/companies', companiesRouter)
}
