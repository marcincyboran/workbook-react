export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export type Title = string;

export interface User {
    token: string;
    firstName: string;
    email: string;
    role: string;
    premium: string;
}

export interface SystemState {
    title: Title;
    user: User | null;
}

interface SetDocumentTitle {
    type: typeof SET_DOCUMENT_TITLE;
    payload: Title;
}

interface SetUser {
    type: typeof SET_USER;
    payload: User;
}

interface ClearUser {
    type: typeof CLEAR_USER;
}

export type SystemActionsTypes = SetDocumentTitle | SetUser | ClearUser;
