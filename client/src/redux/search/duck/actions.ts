import * as types from './types';

export const cacheRecentOffers = (offer: types.Offer): types.CacheActionsTypes => ({
    type: types.CACHE_RECENT_OFFERS,
    payload: offer,
});

export const cacheRecentCompanies = (company: types.Company): types.CacheActionsTypes => ({
    type: types.CACHE_RECENT_COMPANIES,
    payload: company,
});

export const cacheOffersDetails = (offer: types.Offer): types.CacheActionsTypes => ({
    type: types.CACHE_OFFERS_DETAILS,
    payload: offer,
});

export const cacheCompaniesDetails = (company: types.Company): types.CacheActionsTypes => ({
    type: types.CACHE_COMPANIES_DETAILS,
    payload: company,
});
