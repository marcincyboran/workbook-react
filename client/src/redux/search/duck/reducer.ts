import * as types from './types';

const initialStore: types.SearchState = {
    recentOfferts: [],
    recentCompanies: [],
    recentOffertsDetails: [],
    recentCompaniesDetails: [],
};

const reducer = (state = initialStore, action: types.CacheActionsTypes) => {
    switch (action.type) {
        // case types.CACHE_RECENT_OFFERS:
        //     return {
        //         ...state,
        //     }

        // case types.CACHE_RECENT_OFFERS:
        //     return {
        //         ...state,
        //     }

        // case types.CACHE_RECENT_OFFERS:
        //     return {
        //         ...state,
        //     }

        // case types.CACHE_RECENT_OFFERS:
        //     return {
        //         ...state,
        //     }

        default:
            return state;
    }
};

export default reducer;
