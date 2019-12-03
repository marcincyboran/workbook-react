import { AccountType } from '../../../helpers/types';

export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export type Title = string;

export interface User extends AccountType {
    token: string;
}

export interface SystemState {
    title: Title;
    user: User;
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
    payload: User;
}

export type SystemActionsTypes = SetDocumentTitle | SetUser | ClearUser;
