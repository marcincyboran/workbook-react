export default {
    WB_AUTH_TOKEN: 'Workbook-Auth-Token',
    AUTH_HEADER_NAME: 'X-Auth-Token',
    DEFAULT_USER: {
        _id: '',
        token: '',
        firstName: 'John',
        lastName: 'Doe',
        address: 'None',
        email: 'john.doe@gmail.com',
        role: 'user',
        location: {
            city: '',
            coordinates: [0, 0],
            country: '',
            formattedAddress: '',
            state: '',
            street: '',
            type: '',
            zipcode: '',
        },
    },
    MAX_OFFER_IMGS: 4,
    MAX_FILE_SIZE: 1000000,

    MAP_API: 'AIzaSyA0eLeg_EV7QHpFlX107Ci9SSY-HEdcfto&',

    // Filter default settings
    CITIES: ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Trójmiasto', 'Katowice'],
    CATEGORIES: ['Budowa', 'Instalacja', 'Wykończenie', 'Ogród'],
};
