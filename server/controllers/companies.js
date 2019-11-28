const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const Account = require('../models/Account');
const _ = require('lodash/object');
const fakeCompanies = [
    {
        id: 1,
        name: 'Company 1',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie'],
        likes: 1223,
        votes: 2000,
        logo: 'http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg',
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 2,
        name: 'Company 2',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach'],
        likes: 199,
        votes: 2000,
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 3,
        name: 'Company 3',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana'],
        likes: 1113,
        votes: 2000,
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 4,
        name: 'Company 4',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga'],
        likes: 1883,
        votes: 2000,
        logo: 'http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg',
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 5,
        name: 'Company 5',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie'],
        likes: 1223,
        votes: 2000,
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 6,
        name: 'Company 6',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach'],
        likes: 200,
        votes: 2000,
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 7,
        name: 'Company 7',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana'],
        likes: 1113,
        votes: 2000,
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
    {
        id: 8,
        name: 'Company 8',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga'],
        likes: 1883,
        votes: 2000,
        details: {
            address: 'some street 12',
            zipCode: '59-920',
            country: 'Polska',
            nip: 123456789,
        },
        services: [
            'Lorem 12',
            'Lorem 232',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 14232',
            'Lorem 12342',
            'Lorem 14322',
            'Lorem 1442',
        ],
        reviews: [
            {
                name: 'Marcin Cyboran',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam ullam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-08'),
                rating: 3,
            },
            {
                name: 'Klaudia Rawińska',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusaam,lendus ullam quaerat quasi.',
                date: new Date('2019-03-09'),
                rating: 5,
            },
        ],
        site: 'www.google.pl',
    },
];

// @desc    Get companies
// @route   GET /api/v1/companies
// @acces   PUBLIC
module.exports.getCompanies = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        payload: fakeCompanies,
    });
});

// @desc    Get single company
// @route   GET /api/v1/companies/:id
// @acces   PUBLIC
module.exports.getCompany = asyncHandler(async (req, res, next) => {});

// @desc    Create new company
// @route   POST /api/v1/companies
// @acces   PUBLIC
module.exports.createCompany = asyncHandler(async (req, res, next) => {});

// @desc    Update company info
// @route   PUT /api/v1/companies/:id
// @acces   ADMIN / OWNER
module.exports.updateCompany = asyncHandler(async (req, res, next) => {});

// @desc    Delete company
// @route   DELETE /api/v1/companies/:id
// @acces   ADMIN / OWNER
module.exports.deleteCompany = asyncHandler(async (req, res, next) => {});

// @desc    Delete many companies
// @route   DELETE /api/v1/companies/
// @acces   ADMIN / OWNER
// module.exports.deleteCompanies = asyncHandler(async (req, res, next) => {});
