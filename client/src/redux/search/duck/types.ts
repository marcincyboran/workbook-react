export const CACHE_RECENT_OFFERS = 'CACHE_RECENT_OFFERS';
export const CACHE_RECENT_COMPANIES = 'CACHE_RECENT_COMPANIES';
export const CACHE_OFFERS_DETAILS = 'CACHE_OFFERS_DETAILS';
export const CACHE_COMPANIES_DETAILS = 'CACHE_COMPANIES_DETAILS';

export interface Offer {
    name: string;
    details: string;
    createdAt: number;
}

export interface Company {
    name: string;
    details: string;
    createdAt: number;
}

export interface SearchState {
    recentOfferts: Array<Offer>;
    recentCompanies: Company[];
    recentOffertsDetails: Offer[];
    recentCompaniesDetails: Company[];
}

interface CacheRecentOffers {
    type: typeof CACHE_RECENT_OFFERS;
    payload: Offer;
}

interface CacheRecentCompanies {
    type: typeof CACHE_RECENT_COMPANIES;
    payload: Company;
}

interface CacheOffersDetails {
    type: typeof CACHE_OFFERS_DETAILS;
    payload: Offer;
}

interface CacheCompaniesDetails {
    type: typeof CACHE_COMPANIES_DETAILS;
    payload: Company;
}

export type CacheActionsTypes = CacheRecentOffers | CacheRecentCompanies | CacheOffersDetails | CacheCompaniesDetails;
