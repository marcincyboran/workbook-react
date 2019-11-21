export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export type Title = string;

export interface User {
    userName: string;
    userId: string;
    userRole: string;
    userEmail: string;
}

export interface GlobalState {
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

export type GlobalActionsTypes = SetDocumentTitle | SetUser | ClearUser;
