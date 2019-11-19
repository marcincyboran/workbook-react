const express = require('express');
const router = express.Router();

const offers = [
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

const aside = {
    categories: ['Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4'],
    popular: [
        'Popular 1',
        'Popular 2',
        'Popular 3',
        'Popular 4',
        'Popular 5',
        'Popular 6',
        'Popular 7',
        'Popular 8',
        'Popular 9',
        'Popular 10',
    ],
    places: ['Miasto 1', 'Miasto 2', 'Miasto 3', 'Miasto 4'],
};

router.get('/', (req, res) => {
    // Pretend database delay
    setTimeout(function() {
        res.send({ offers, aside });
    }, 1000);
});

router.get('/:id', async (req, res) => {
    // TODO - db query
    // const offer = await Offer.findById(req.params.id);
    const index = offers.findIndex(el => el.id === parseInt(req.params.id));
    setTimeout(function() {
        res.send(offers[index]);
    }, 1000);
});

module.exports = router;
