import axios from 'axios';
import { logout } from './logout';
import { useMainStore } from '../store/main.store';
class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            timeout: 10000,
        });

        this.logoutCallback = null;

        this.instance.interceptors.response.use(response => {
            // console.log("INTER", response);
            if (response?.data?.code == 91) {
                console.log('ERROR LOGIN');
                if (typeof logout === 'function') {
                    logout();
                }
            }
            return response;
        });
    }

    async get(url) {
        const { token: Authentication } = useMainStore.getState();
        if (!Authentication) {
            console.log('no token, wont send');
            return;
        }
        let res, data;

        try {
            res = await this.instance.get(url, { headers: { Authentication } });
            // console.log(`get res ${url}:: `, JSON.stringify(res, null, 4));

            if (res?.data) {
                data = res.data;
            }
        } catch (err) {
            console.log(`get err ${url}:: `, err);
            data = {
                ...res,
                errored: true,
            };
        }

        return data;
    }

    async post(url, args, options) {
        // console.log('post url: ', url, args);
        const { noAuth } = options || {};
        const { token: Authentication } = useMainStore.getState();
        if (!noAuth && !Authentication) {
            console.log('no token, wont send');
            return;
        }
        let res, data;

        try {
            res = await this.instance.post(url, args, {
                headers: {
                    Authentication,
                    // "Content-Type": "multipart/form-data",
                },
            });
            // console.logobject(res);
            if (res?.data) {
                data = res.data;
            }
        } catch (err) {
            console.log(`post err ${url}:: `, res, err);
            data = {
                ...res,
                errored: true,
            };
        }

        return data;
    }

    async put(url, args) {
        const { token: Authentication } = useMainStore.getState();
        if (!Authentication) {
            console.log('no token, wont send');
            return;
        }
        let res, data;

        try {
            res = await this.instance.put(url, args, { headers: { Authentication } });
            if (res?.data) {
                data = res.data;
            }
        } catch (err) {
            console.log(`post err ${url}:: `, err);
            data = {
                ...res,
                errored: true,
            };
        }

        return data;
    }

    async patch(url, args) {
        const { token: Authentication } = useMainStore.getState();
        if (!Authentication) {
            console.log('no token, wont send');
            return;
        }
        let res, data;

        try {
            res = await this.instance.patch(url, args, { headers: { Authentication } });
            if (res?.data) {
                data = res.data;
            }
        } catch (err) {
            // console.log(`patch err ${url}:: `, err);
            data = {
                ...res,
                err,
                errored: true,
            };
        }

        return data;
    }

    async delete(url) {
        const { token: Authentication } = useMainStore.getState();
        if (!Authentication) {
            console.log('no token, wont send');
            return;
        }
        let res, data;

        try {
            const res = await this.instance.delete(url, { headers: { Authentication } });
            if (res?.data) {
                data = res.data;
            }
        } catch (err) {
            console.log(`post err ${url}:: `, err);
            data = {
                ...res,
                errored: true,
            };
        }

        return data;
    }
}

const http = new Http();

export default http;
