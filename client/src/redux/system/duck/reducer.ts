import * as types from './types';

const initialStore: types.SystemState = {
    title: 'WorkBook',
    user: {
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
};

const reducer = (state = initialStore, action: types.SystemActionsTypes) => {
    switch (action.type) {
        case types.SET_DOCUMENT_TITLE:
            return {
                ...state,
                title: action.payload,
            };

        case types.SET_USER:
        case types.CLEAR_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
