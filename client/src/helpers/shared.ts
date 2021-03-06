import { AxiosResponse } from 'axios';
import { allActions } from '../redux/store';
import { systemTypes } from '../redux/system/index';
import CONSTANTS from '../helpers/constants';
import http from './axios';
import { CreatedAt } from './types';

export default class Helpers {
    static genModsFromProp = (base: string, mods: string): string => {
        return mods
            .replace(' ', '')
            .split(',')
            .map(mod => `${base}--${mod}`)
            .join(' ');
    };

    static getUser = async () => {
        if (
            localStorage.getItem(CONSTANTS.WB_AUTH_TOKEN) &&
            localStorage.getItem(CONSTANTS.WB_AUTH_TOKEN) !== 'undefined'
        ) {
            try {
                const res = await http.get('auth/me');
                console.log(res);
                Helpers.userFromResponse(res);
            } catch (err) {
                Helpers.clearUser();
            }
        }
    };

    static userFromResponse = (res: AxiosResponse): void => {
        const { success, payload } = res.data;
        if (success) localStorage.setItem(CONSTANTS.WB_AUTH_TOKEN, payload.token);
        const user: systemTypes.User = {
            token: payload.token,
            ...payload.account,
        };
        allActions.setUser(user);
    };

    static clearUser = (): void => {
        localStorage.removeItem(CONSTANTS.WB_AUTH_TOKEN);
        allActions.clearUser();
    };

    static formatDate = (rawDate: CreatedAt): string => {
        const date = new Date(rawDate);
        const today = new Date();
        if (today.getTime() - date.getTime() <= 86400000) {
            return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${
                date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            }`;
        } else {
            return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${
                date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
            }.${date.getFullYear()}`;
        }
    };
}
