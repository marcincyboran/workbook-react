require('colors');

const express = require('express');
const app = express();

require('./startup/setup')(app);
require('./startup/db')();
require('./startup/logger')(app);
require('./startup/routes')(app);
require('./startup/errors')(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandledRejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server
    server.close(() => process.exit(1));
});
