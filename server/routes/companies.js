const express = require('express');
const router = express.Router();

const companies = [
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

router.get('/', (req, res) => {
    // Pretend database delay
    setTimeout(function() {
        res.send(companies);
    }, 1000);
});

router.get('/:id', (req, res) => {
    // TODO - db query
    const index = companies.findIndex(el => el.id === parseInt(req.params.id));
    setTimeout(function() {
        res.send(companies[index]);
    }, 1000);
});

module.exports = router;
