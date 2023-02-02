export enum StorageKeys {
    language = 'language',
    user = 'user',
}

export const StorageService = {
    get: (key: StorageKeys) => {
        return (typeof window !== 'undefined') ? window.localStorage.getItem(key) : false;
    },
    save: (key: StorageKeys, data: any) => {
        return (typeof window !== 'undefined') ? window.localStorage.setItem(key, data) : false;
    }
}