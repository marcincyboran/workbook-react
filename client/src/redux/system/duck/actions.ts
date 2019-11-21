import * as types from './types';

export const setDocumentTitle = (title: types.Title): types.SystemActionsTypes => ({
    type: types.SET_DOCUMENT_TITLE,
    payload: title,
});

export const setUser = (user: types.User): types.SystemActionsTypes => ({
    type: types.SET_USER,
    payload: user,
});

export const clearUser = (): types.SystemActionsTypes => ({
    type: types.CLEAR_USER,
});
