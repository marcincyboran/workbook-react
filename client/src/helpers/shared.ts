export default class Helpers {
    static genModsFromProp = (base: string, mods: string) => {
        return mods
            .replace(' ', '')
            .split(',')
            .map(mod => `${base}--${mod}`)
            .join(' ');
    };
}
