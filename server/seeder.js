require('dotenv').config({ path: './config/config.env' });
const fs = require('fs');
const mongoose = require('mongoose');
const Account = require('./models/Account');

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

// Import to DB
const seed = async () => {
    try {
        await Account.create(users);
        console.log('Imported to db...');
        process.exit(1);
    } catch (err) {
        console.log(err);
    }
};

// Clear DB
const clear = async () => {
    try {
        await Account.deleteMany();
        console.log('All camps deleted');
        process.exit(1);
    } catch (err) {
        console.log(err);
    }
};

connect();
