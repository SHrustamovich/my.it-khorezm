import axios from "axios";
import { getLocalStorage } from "./helpers";

export const $authHost = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});

$authHost.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            config.headers["x-auth-token"] = accessToken;
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const accessTokenExpireTime = getLocalStorage("accessTokenExpiresAt");
$authHost.interceptors.response.use(
    async (response) => {
        // 5554324523153152
        // console.log(response);
        // if (Date.now() >= +accessTokenExpireTime) {
        //     window.localStorage.clear();
        //     window.location.pathname = "/logout";
        //     window.location.reload();
        // }

        return response;
    },
    async function (error) {
        return Promise.reject(error);
    }
);
