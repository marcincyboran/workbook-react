import * as types from './types';

export const setDocumentTitle = (title: types.Title): types.GlobalActionsTypes => ({
    type: types.SET_DOCUMENT_TITLE,
    payload: title,
});

export const setUser = (user: types.User): types.GlobalActionsTypes => ({
    type: types.SET_USER,
    payload: user,
});

export const clearUser = (): types.GlobalActionsTypes => ({
    type: types.CLEAR_USER,
});
