const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');

module.exports = app => {
    app.use(cors({ origin: 'http://localhost:3000' }));
    app.use(express.json());
    app.use(
        fileUpload({
            debug: true,
        })
    );
    app.use(express.static(path.join(`${__dirname}/public`)));
};
