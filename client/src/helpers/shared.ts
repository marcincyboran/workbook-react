import { AxiosResponse } from 'axios';
import { allActions } from '../redux/store';
import { systemTypes } from '../redux/system/index';
import CONSTANTS from '../helpers/constants';

export default class Helpers {
    static genModsFromProp = (base: string, mods: string) => {
        return mods
            .replace(' ', '')
            .split(',')
            .map(mod => `${base}--${mod}`)
            .join(' ');
    };

    static userFromResponse = (res: AxiosResponse) => {
        const { success, payload } = res.data;
        if (success) localStorage.setItem(CONSTANTS.WB_AUTH_TOKEN, payload.token);
        const user: systemTypes.User = {
            token: payload.token,
            ...payload.account,
        };
        allActions.setUser(user);
    };

    static clearUser = () => {
        localStorage.removeItem(CONSTANTS.WB_AUTH_TOKEN);
        allActions.clearUser();
    };
}
