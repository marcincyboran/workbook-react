require('dotenv').config({ path: './config/config.env' });
const fs = require('fs');
const mongoose = require('mongoose');
const Account = require('./models/Account');
const Offer = require('./models/Offer');

// Connect to DB
const connect = async () => {
    const con = await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${con.connection.host}`);

    if (process.argv[2] === '-i') {
        await seed();
    } else if (process.argv[2] === '-d') {
        await clear();
    }
};

// Read files
const users = JSON.parse(fs.readFileSync(`${__dirname}/_seederData/accounts.json`, 'utf-8'));
const offers = JSON.parse(fs.readFileSync(`${__dirname}/_seederData/offers.json`, 'utf-8'));

// Import to DB
const seed = async () => {
    try {
        await Account.create(users);
        await Offer.create(offers);
        console.log('Imported...');
        process.exit(1);
    } catch (err) {
        console.log(err);
    }
};

// Clear DB
const clear = async () => {
    try {
        await Account.deleteMany();
        await Offer.deleteMany();
        console.log('Deleted...');
        process.exit(1);
    } catch (err) {
        console.log(err);
    }
};

connect();
