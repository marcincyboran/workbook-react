export interface ImageType {
    src: string;
    alt: string;
}
export interface Owner {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    address?: string;
    role: 'user' | 'company' | 'admin';
    phone?: string;
    createdAt?: string;
    lastModified?: string;
    premium: boolean;
}
export interface LocationType {
    type: string;
    coordinates: number[];
    formattedAddress: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
}

export interface ReviewType {
    name: string;
    text: string;
    createdAt: CreatedAt;
    rating: number;
}

export interface InfoType {
    type: 'info' | 'error';
    msg: string;
}

export type CreatedAt = Date | string | number;

export interface CompanyType {
    _id: string;
    name: string;
    text: string;
    createdAt: CreatedAt;
    address: string;
    location: LocationType;
    tags: string[];
    likes: number;
    votes: number;
    logo?: string;
    imgs: ImageType[];
    services: string[];
    reviews: ReviewType[];
    site?: string;
}

export interface OfferType {
    _id: string;
    title: string;
    shortText: string;
    description: string;
    address: string;
    location: LocationType;
    tags: string[];
    slug: string;
    imgs: ImageType[];
    budget?: number;
    owner: Owner;
    createdAt: CreatedAt;
    premium: boolean;
}

export interface AccountType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    address: string;
    location: LocationType;
    createdAt?: CreatedAt;
    lastModified?: Date;
    phone?: string;
    facebook?: string;
    linkedin?: string;
    resetToken?: string;
    resetTokenExpire?: string;
    offertsCounter?: number;
    premium?: boolean;
}
