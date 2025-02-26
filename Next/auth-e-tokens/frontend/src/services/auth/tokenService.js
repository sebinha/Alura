import nookies from 'nookies';

const token = 'access_token';
const tokenService = {

    save: (access_token, ctx = null) => {
        globalThis?.localStorage?.setItem(token, access_token);
        globalThis?.sessionStorage?.setItem(token, access_token);
        nookies.set(ctx, token, access_token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365
        });
    },
    get: (ctx = null) => {
        // globalThis?.localStorage?.getItem(token);
        // globalThis?.sessionStorage?.getItem(token);
        const cookies = nookies.get(ctx, token);
        return cookies[token] || '';
    },
    delete: (ctx = null) => {
        nookies.destroy(ctx, token);
    },
    clear: () => {
        localStorage.clear();
    },
};

export default tokenService;