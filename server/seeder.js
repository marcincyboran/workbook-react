require('dotenv').config({ path: './config/config.env' });
const fs = require('fs');
const mongoose = require('mongoose');
const Account = require('./models/Account');
const Offer = require('./models/Offer');
const Company = require('./models/Company');
const Review = require('./models/Review');

// Connect to DB
const connect = async () => {
    const con = await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
    let timer = Date.now();

    if (process.argv[2] === '-i') {
        await seed();
        console.log(`Imported in ${(Date.now() - timer) / 1000} s`);
    } else if (process.argv[2] === '-d') {
        await clear();
        console.log(`Deleted in ${(Date.now() - timer) / 1000} s`);
    } else if (process.argv[2] === '-r') {
        await clear();
        console.log(`Deleted in ${(Date.now() - timer) / 1000} s`);
        timer = Date.now();
        await seed();
        console.log(`Imported in ${(Date.now() - timer) / 1000} s`);
    }

    process.exit(1);
};

// Read files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_seederData/accounts.json`, 'utf-8'));
const offers = JSON.parse(fs.readFileSync(`${__dirname}/_seederData/offers.json`, 'utf-8'));
const companies = JSON.parse(fs.readFileSync(`${__dirname}/_seederData/companies.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/_seederData/reviews.json`, 'utf-8'));

// Import to DB
const seed = async () => {
    try {
        await Account.create(users);
        await Offer.create(offers);
        await Company.create(companies);
        await Review.create(reviews);
    } catch (err) {
        console.log(err);
    }
};

// Clear DB
const clear = async () => {
    try {
        await Account.deleteMany();
        await Offer.deleteMany();
        await Company.deleteMany();
        await Review.deleteMany();
    } catch (err) {
        console.log(err);
    }
};

connect();
