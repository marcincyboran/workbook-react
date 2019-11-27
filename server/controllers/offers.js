const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');
const Account = require('../models/Account');
const _ = require('lodash/object');
const fakeOffers = [
    {
        id: 1,
        title: 'offer 1',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie'],
    },
    {
        id: 2,
        title: 'offer 2',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach'],
    },
    {
        id: 3,
        title: 'offer 3',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana'],
    },
    {
        id: 4,
        title: 'offer 4',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga'],
    },
    {
        id: 5,
        title: 'offer 5',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date(),
        location: 'Bogatynia',
        tags: ['remont', 'podłoga', 'pilne', 'wykończenie'],
    },
    {
        id: 6,
        title: 'offer 6',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date('2019-03-09'),
        location: 'Wrocław',
        tags: ['dach'],
    },
    {
        id: 7,
        title: 'offer 7',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date('2019-03-08'),
        location: 'Zgorzelec',
        tags: ['remont', 'ściana'],
    },
    {
        id: 8,
        title: 'offer 8',
        text:
            'lorm ipsum sdasd ad asdasd asdf asdf asfasdf asfnask hfaksjhf jasb fkjasg fkasbdfakjhsgdfasjgf dasjhgdfaksjdf',
        details: {
            textDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi incidunt error reprehenderit deleniti totam.',
            name: 'Marcin Cyboran',
            tel: '123-456-789',
            mail: 'marcin.cyboran.wsb@gmail.com',
            fb: 'marcincyboran',
        },
        date: new Date('2019-03-07'),
        location: 'Warszawa',
        tags: ['remont', 'podłoga'],
    },
];

// @desc    Get offers
// @route   GET /api/v1/offers
// @acces   PUBLIC
module.exports.getOffers = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        payload: fakeOffers,
    });
});

// @desc    Get offer details
// @route   GET /api/v1/offers/:id
// @acces   PUBLIC
module.exports.getOffer = asyncHandler(async (req, res, next) => {});

// @desc    Create offer
// @route   POST /api/v1/offers
// @acces   ADMIN / USERS / COMPANIES
module.exports.createOffer = asyncHandler(async (req, res, next) => {});

// @desc    Update offer details
// @route   PUT /api/v1/offers/:id
// @acces   ADMIN / OWNER
module.exports.updateOffer = asyncHandler(async (req, res, next) => {});

// @desc    Delete offer
// @route   DELETE /api/v1/offers/:id
// @acces   ADMIN / OWNER
module.exports.deleteOffer = asyncHandler(async (req, res, next) => {});
