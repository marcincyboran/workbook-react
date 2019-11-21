import * as types from './types';

const initialStore: types.SystemState = {
    title: 'INITIAL_TITLE',
    user: null,
};

const reducer = (state = initialStore, action: types.SystemActionsTypes) => {
    switch (action.type) {
        case types.SET_DOCUMENT_TITLE:
            return {
                ...state,
                title: action.payload,
            };

        case types.SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case types.CLEAR_USER:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
};

export default reducer;
