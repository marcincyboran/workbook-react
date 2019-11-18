const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')

module.exports = app => {
    app.use(express.json())
    app.use(express.fileUpload({ debug: true }))
    app.use(express.static(path.join(`${__dirname}/public`)))
}
